import React from "react";
import Button from "../Button";

export default function MainBanner() {
    return (
        <div className="flex flex-row m-5">
            <div className="mx-5 w-1/5">
                <img src="https://iphoneswallpapers.com/wp-content/uploads/2024/04/Crimson-Night-by-midmindarts-iPhone-Wallpaper-HD.jpg" />
            </div>
            <div className="m-5 w-2/5">
                <h2 className="text-3xl font-semibold">Title</h2>
                <p className="text-xl">
                    Paragraph
                </p>
                <div className="m-5 w-2/5">
                    <Button />
                    <p className="text-sm text-center">
                        Descr.
                    </p>
                </div>
            </div>
        </div>
    )
}