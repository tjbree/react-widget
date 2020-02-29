import React from 'react'
import { useSpring, animated } from 'react-spring'

const i = 1
const interp = i => r => `translate3d(${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px,0, 0)`

const Animation = () => {
    const { radians } = useSpring({
        to: async next => {
            while (1) await next({ radians: 2 * Math.PI })
        },
        from: { radians: 0 },
        config: { duration: 3500 },
        reset: true
    })
    return (
        <div className="animation-container">
            <animated.div style={{ transform: radians.interpolate(interp(i)) }} className="arrow">
                <div className="pop">New feature</div>
            </animated.div>

            <animated.div style={{ transform: radians.interpolate(interp(i)) }} className="arrow2">
                <div className="pop2"></div>
            </animated.div>
        </div>
    )
}
const MemoAnimation = React.memo(Animation)
export default MemoAnimation