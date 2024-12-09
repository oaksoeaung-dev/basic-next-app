"use client"
export default function Loading()
{
    return(
        <div className={"flex items-center justify-center"}>
            <style jsx>
                {
                    `
                        .loader {
                            height: 40px;
                            aspect-ratio: .866;
                            display: grid;
                            background: conic-gradient(from -121deg at right,#0000, #BF1E62 1deg 60deg,#0000 61deg);
                            animation: l11-0 2s infinite;
                            transform-origin: 33% 50%;
                        }
                        .loader:before,
                        .loader:after {
                            content: "";
                            grid-area: 1/1;
                            background: conic-gradient(from -121deg at right,#0000, #FFA588 1deg 60deg,#0000 61deg);
                            animation: inherit;
                            animation-name: l11-1;
                        }
                        .loader:after {
                            --s:30px;
                            background: conic-gradient(from -121deg at right,#0000, #027B7F 1deg 60deg,#0000 61deg);
                        }
                        @keyframes l11-0{
                            0%   {transform:translate(-30px) rotate(0)      translate(0)    rotate(0)}
                            25%  {transform:translate( 30px) rotate(0)      translate(0)    rotate(0)}
                            50%  {transform:translate( 30px) rotate(180deg) translate(0)    rotate(0)}
                            75%  {transform:translate( 30px) rotate(180deg) translate(60px) rotate(0)}
                            100% {transform:translate( 30px) rotate(180deg) translate(60px) rotate(180deg)}
                        }
                        @keyframes l11-1{
                            0%,25%,50%,75%,100% {transform: translate(0)}
                            12.5%,62.5% {transform: translate(var(--s,15px))}
                        }`
                }
            </style>
            <div className="loader"></div>
        </div>
    )
}