import NavButton from "./NavButton";

export default function() {
    return (
        <nav className="flex justify-between p-4 items-center">
            <a href="/">
                <h1 className="
                        font-bold 
                        text-3xl 
                        [text-shadow:1px_1px_1px_rgba(0,0,0,0.3)]
                        text-blue
                    "
                >
                    Interest calculator
                </h1>
            </a>
            <div className="space-x-4">
                <NavButton href="/">Home</NavButton>
                <NavButton href="/calculator">Calculator</NavButton>
                <NavButton href="/contact">Contact</NavButton>
                <NavButton href="/login">Login</NavButton>
            </div>
        </nav>
    )
}