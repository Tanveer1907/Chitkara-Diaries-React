import React from 'react';

// Animations defined in journal.css (we will add them)
const getAnimationClass = (anim) => {
    switch (anim) {
        case 'fade': return 'anim-fade';
        case 'slide-up': return 'anim-slide-up';
        case 'bounce': return 'anim-bounce';
        case 'zoom': return 'anim-zoom';
        default: return '';
    }
};

const JournalRenderer = ({ elements, width = '100%', height = '100%' }) => {
    // Base 100x100 coordinate system to %. 
    // We assume elements are stored with x/y in percentages or pixels relative to a base.
    // For this simple implementation, we'll assume x/y are percentages (0-100).

    return (
        <div
            className="journal-renderer-canvas"
            style={{
                width: width,
                height: height,
                position: 'relative',
                overflow: 'hidden',
                background: '#fff'
            }}
        >
            {elements.map((el) => {
                const style = {
                    position: 'absolute',
                    left: `${el.x}%`,
                    top: `${el.y}%`,
                    transform: `translate(-50%, -50%) rotate(${el.rotation || 0}deg)`,
                    ...el.style, // color, fontSize, etc.
                    width: el.type === 'image' ? (el.width ? `${el.width}%` : 'auto') : 'auto',
                    maxWidth: '100%'
                };

                const className = `journal-element ${getAnimationClass(el.animation)}`;

                if (el.type === 'text') {
                    return (
                        <div key={el.id} style={style} className={className}>
                            {el.content}
                        </div>
                    );
                }

                if (el.type === 'image') {
                    return (
                        <img
                            key={el.id}
                            src={el.content}
                            alt="journal-element"
                            style={style}
                            className={className}
                        />
                    );
                }

                return null;
            })}
        </div>
    );
};

export default JournalRenderer;
