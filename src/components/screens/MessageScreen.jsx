"use client"

import { useState } from "react"

export default function MessageScreen() {
    const [opened, setOpened] = useState(false)

    return (
        <div className="bg-[#fff8fc] p-7 rounded-[60px] drop-shadow-2xl min-w-48 w-full max-w-110 relative flex flex-col items-center gap-4 my-10">
            <div
                className="text-center">
                <h2
                    className="text-2xl md:text-3xl font-semibold text-primary text-center"
                >
                    A Special Message
                </h2>

                <p className="text-primary/70 text-sm">
                    Tap to open
                </p>
            </div>

            <div
                onClick={() => setOpened(!opened)}
                className={`card  relative h-71.25 w-full rounded-[40px] overflow-hidden shadow-inner cursor-pointer transition-all bg-linear-to-b from-white/80 to-pink-200 flex items-center justify-center max-w-71.25`}
            >
                <div className={`cover ${opened ? "opacity-0" : "opacity-100"} pointer-events-none z-10 bg-[#ffedea]!`} />

                <div className="relative px-6 h-56 overflow-y-auto text-foreground">
                     𝐇𝐚𝐩𝐩𝐲 𝐛𝐢𝐫𝐭𝐡𝐝𝐚𝐲, 🎉 𝐦𝐚𝐲 𝐲𝐨𝐮𝐫 𝐝𝐚𝐲 𝐛𝐞 𝐚𝐬 𝐬𝐰𝐞𝐞𝐭 𝐚𝐬 𝐲𝐨𝐮𝐫 𝐛𝐞𝐡𝐚𝐯𝐢𝐨𝐫 𝐚𝐬 𝐛𝐞𝐚𝐮𝐭𝐢𝐟𝐮𝐥 𝐚𝐬 𝐲𝐨𝐮𝐫 𝐡𝐞𝐚𝐫𝐭, ❤️ 𝐲𝐨𝐮 𝐝𝐞𝐬𝐞𝐫𝐯𝐞 𝐚𝐥𝐥 𝐭𝐡𝐞 𝐥𝐨𝐯𝐞, 𝐡𝐚𝐩𝐩𝐢𝐧𝐞𝐬𝐬 𝐚𝐧𝐝 𝐥𝐢𝐭𝐭𝐥𝐞 𝐦𝐚𝐠𝐢𝐜𝐚𝐥 𝐦𝐨𝐦𝐞𝐧𝐭𝐬 𝐭𝐨𝐝𝐚𝐲 𝐚𝐧𝐝 𝐚𝐥𝐰𝐚𝐲𝐬, 💖 𝐦𝐚𝐲 𝐲𝐨𝐮𝐫 𝐚𝐥𝐥 𝐝𝐫𝐞𝐚𝐦/𝐠𝐨𝐚𝐥 𝐜𝐨𝐦𝐞𝐬 𝐭𝐫𝐮𝐞 𝐚𝐧𝐝 𝐲𝐨𝐮𝐫 𝐥𝐢𝐟𝐞 𝐛𝐞 𝐟𝐢𝐥𝐥𝐞𝐝 𝐰𝐢𝐭𝐡 𝐩𝐞𝐚𝐜𝐞 𝐚𝐧𝐝 𝐥𝐨𝐯𝐞, ❤️ 𝐨𝐧 𝐲𝐨𝐮𝐫 𝐬𝐩𝐞𝐜𝐢𝐚𝐥 𝐝𝐚𝐲 𝐩𝐫𝐚𝐲 𝐟𝐨𝐫 𝐲𝐨𝐮𝐫𝐬𝐞𝐥𝐟 𝐚𝐧𝐝 𝐲𝐨𝐮𝐫 𝐝𝐫𝐞𝐚𝐦𝐬, 𝐦𝐚𝐲 𝐠𝐨𝐝 𝐤𝐞𝐞𝐩 𝐲𝐨𝐮 𝐚𝐥𝐰𝐚𝐲𝐬 𝐡𝐚𝐩𝐩𝐲, 💖 𝐚𝐧𝐝 𝐲𝐨𝐮𝐫 𝐰𝐡𝐨𝐥𝐞 𝐝𝐚𝐲 𝐛𝐞 𝐛𝐞𝐚𝐮𝐭𝐢𝐟𝐮𝐥, 𝐦𝐚𝐲 𝐠𝐨𝐝 𝐚𝐥𝐰𝐚𝐲𝐬 𝐩𝐫𝐨𝐭𝐞𝐜𝐭 𝐲𝐨𝐮, 𝐠𝐮𝐢𝐝𝐞 𝐲𝐨𝐮, 𝐚𝐧𝐝 𝐟𝐮𝐥𝐟𝐢𝐥𝐥 𝐚𝐥𝐥 𝐲𝐨𝐮𝐫 𝐰𝐢𝐬𝐡𝐞𝐬.✨️💗
                </div>
            </div>
        </div>
    )
}
