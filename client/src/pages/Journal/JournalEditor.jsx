import React, { useState, useRef, useEffect } from 'react';
import './journal.css'; // We'll add editor styles here

const JournalEditor = ({ onSave, onCancel }) => {
    const [elements, setElements] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [dragInfo, setDragInfo] = useState(null); // { startX, startY, initialX, initialY }
    const canvasRef = useRef(null);

    // --- ADD ELEMENTS ---
    const addText = () => {
        const newEl = {
            id: crypto.randomUUID(),
            type: 'text',
            content: 'Tap to edit',
            x: 50,
            y: 50,
            rotation: 0,
            animation: 'none',
            style: {
                fontSize: '24px',
                color: '#000000',
                fontFamily: 'Inter',
                fontWeight: 'normal',
                textAlign: 'center',
            }
        };
        setElements([...elements, newEl]);
        setSelectedId(newEl.id);
        setIsEditing(false);
    };

    const handleImageUpload = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const url = URL.createObjectURL(file);
            const newEl = {
                id: crypto.randomUUID(),
                type: 'image',
                content: url,
                x: 50,
                y: 50,
                rotation: 0,
                width: 40, // percentage
                animation: 'none',
                style: {}
            };
            setElements([...elements, newEl]);
            setSelectedId(newEl.id);
            setIsEditing(false);
        }
    };

    // --- DRAG LOGIC ---
    const handleMouseDown = (e, id) => {
        e.stopPropagation();

        // If editing text, don't drag
        if (isEditing && selectedId === id) return;

        setSelectedId(id);
        setIsEditing(false); // Reset edit mode on new click

        const el = elements.find(el => el.id === id);
        if (!el) return;

        setDragInfo({
            startX: e.clientX,
            startY: e.clientY,
            initialX: el.x,
            initialY: el.y
        });
    };

    const handleMouseMove = (e) => {
        if (!dragInfo || !selectedId || !canvasRef.current) return;

        const canvasRect = canvasRef.current.getBoundingClientRect();
        const deltaX = ((e.clientX - dragInfo.startX) / canvasRect.width) * 100;
        const deltaY = ((e.clientY - dragInfo.startY) / canvasRect.height) * 100;

        setElements(elements.map(el => {
            if (el.id === selectedId) {
                return {
                    ...el,
                    x: dragInfo.initialX + deltaX,
                    y: dragInfo.initialY + deltaY
                };
            }
            return el;
        }));
    };

    const handleMouseUp = () => {
        setDragInfo(null);
    };

    const handleCanvasClick = (e) => {
        if (e.target === canvasRef.current) {
            setSelectedId(null);
            setIsEditing(false);
        }
    };

    const handleDoubleClick = (e, id) => {
        e.stopPropagation();
        const el = elements.find(e => e.id === id);
        if (el && el.type === 'text') {
            setSelectedId(id);
            setIsEditing(true);
        }
    };

    // --- UPDATE ATTRIBUTES ---
    const updateSelected = (key, value, nested = false) => {
        setElements(elements.map(el => {
            if (el.id === selectedId) {
                if (nested) {
                    return { ...el, style: { ...el.style, [key]: value } };
                }
                return { ...el, [key]: value };
            }
            return el;
        }));
    };

    const deleteSelected = () => {
        setElements(elements.filter(el => el.id !== selectedId));
        setSelectedId(null);
        setIsEditing(false);
    };

    const selectedElement = elements.find(el => el.id === selectedId);

    return (
        <div className="editor-container" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>

            {/* TOOLBAR (Left) */}
            <div className="editor-sidebar">
                <h3 className="editor-title">Design</h3>

                <button className="editor-tool-btn" onClick={addText}>
                    <span className="icon">Aa</span> Text
                </button>

                <label className="editor-tool-btn">
                    <span className="icon">🖼️</span> Image
                    <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
                </label>

                <div className="editor-divider"></div>

                <button className="editor-save-btn" onClick={() => onSave(elements)}>
                    Save Page
                </button>
                <button className="editor-cancel-btn" onClick={onCancel}>
                    Cancel
                </button>
            </div>

            {/* CANVAS (Center) */}
            <div className="editor-canvas-area" onClick={handleCanvasClick}>
                <div
                    className="editor-canvas"
                    ref={canvasRef}
                >
                    {elements.map(el => (
                        <div
                            key={el.id}
                            className={`editor-element ${selectedId === el.id ? 'selected' : ''}`}
                            style={{
                                left: `${el.x}%`,
                                top: `${el.y}%`,
                                transform: `translate(-50%, -50%) rotate(${el.rotation}deg)`,
                                width: el.type === 'image' ? (el.width ? `${el.width}%` : 'auto') : 'auto',
                                ...el.style,
                                zIndex: selectedId === el.id ? 100 : 1
                            }}
                            onMouseDown={(e) => handleMouseDown(e, el.id)}
                            onDoubleClick={(e) => handleDoubleClick(e, el.id)}
                        >
                            {el.type === 'text' ? (
                                (selectedId === el.id && isEditing) ? (
                                    <textarea
                                        value={el.content}
                                        onChange={(e) => updateSelected('content', e.target.value)}
                                        className="editor-text-input"
                                        autoFocus
                                        onBlur={() => setIsEditing(false)}
                                        style={{ resize: 'none', height: 'auto', overflow: 'hidden' }}
                                    />
                                ) : (
                                    <span style={{ whiteSpace: 'pre-wrap' }}>{el.content}</span>
                                )
                            ) : (
                                <img src={el.content} alt="element" className="editor-img-content" />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* INSPECTOR (Right) - Only if selected */}
            {selectedElement && (
                <div className="editor-inspector">
                    <h4>Properties</h4>

                    <div className="inspector-group">
                        <label>Effect / Animation</label>
                        <select
                            value={selectedElement.animation}
                            onChange={(e) => updateSelected('animation', e.target.value)}
                        >
                            <option value="none">None</option>
                            <option value="fade">Fade In</option>
                            <option value="slide-up">Slide Up</option>
                            <option value="bounce">Bounce</option>
                            <option value="zoom">Zoom</option>
                        </select>
                    </div>

                    <div className="inspector-group">
                        <label>Rotation</label>
                        <input
                            type="range" min="0" max="360"
                            value={selectedElement.rotation}
                            onChange={(e) => updateSelected('rotation', Number(e.target.value))}
                        />
                    </div>

                    {selectedElement.type === 'image' && (
                        <div className="inspector-group">
                            <label>Size</label>
                            <input
                                type="range" min="10" max="100"
                                value={selectedElement.width || 40}
                                onChange={(e) => updateSelected('width', Number(e.target.value))}
                            />
                        </div>
                    )}

                    {selectedElement.type === 'text' && (
                        <>
                            <div className="inspector-group">
                                <label>Color</label>
                                <input
                                    type="color"
                                    value={selectedElement.style.color}
                                    onChange={(e) => updateSelected('color', e.target.value, true)}
                                />
                            </div>
                            <div className="inspector-group">
                                <label>Font Size</label>
                                <select
                                    value={selectedElement.style.fontSize}
                                    onChange={(e) => updateSelected('fontSize', e.target.value, true)}
                                >
                                    <option value="16px">Small</option>
                                    <option value="24px">Medium</option>
                                    <option value="36px">Large</option>
                                    <option value="64px">Huge</option>
                                </select>
                            </div>
                        </>
                    )}

                    <div className="inspector-divider"></div>
                    <button className="editor-delete-btn" onClick={deleteSelected}>
                        Delete Element
                    </button>
                </div>
            )}
        </div>
    );
};

export default JournalEditor;
