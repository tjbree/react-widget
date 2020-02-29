import React from 'react'

function MyButton({ checkNewFeature }) {
    const rightGap = 40;
    const styles = { marginRight: `${rightGap}px` }

    return (
        <button 
            className="ref"
            style={styles}
            onClick={checkNewFeature}
        >
            Click me
        </button >
    )
}
export default MyButton