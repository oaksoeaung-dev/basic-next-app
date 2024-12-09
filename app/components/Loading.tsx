import React from "react";

export default function Loading() {
    return (

        <div>
            <style jsx>{`
                .loader {
                width: 40px;
                height: 40px;
                position: relative;
                --c:no-repeat linear-gradient(#25b09b 0 0);
                background:
                var(--c) center/100% 10px,
                var(--c) center/10px 100%;
            }
                .loader:before {
                content:'';
                position: absolute;
                inset: 0;
                background:
                var(--c) 0    0,
                var(--c) 100% 0,
                var(--c) 0    100%,
                var(--c) 100% 100%;
                background-size: 15.5px 15.5px;
                animation: l16 1.5s infinite cubic-bezier(0.3,1,0,1);
            }
                @keyframes l16 {
                33 % {inset: -10px;transform: rotate(0deg)}
                66%  {inset:-10px;transform: rotate(90deg)}
                100% {inset:0    ;transform: rotate(90deg)}
            }`}
            </style>
            <div className="loader"></div>
        </div>
    )
}