import Link from 'next/link';
import { navigation } from '@/config/navigation';
import Button from './Button';

export default function NavBar() {
    return (
        <div className="flex justify-between p-4 items-center">
            <Link href="/">
                <h1
                    className="
                        font-bold 
                        text-4xl 
                        [text-shadow:1px_1px_1px_rgba(0,0,0,0.3)]
                        text-primary
                    "
                >
                    Interest calculator
                </h1>
            </Link>
            <nav className="space-x-4">
                {navigation.map((navItem) => (
                    <Button
                        variant="nav"
                        key={navItem.href}
                        href={navItem.href}
                    >
                        {navItem.label}
                    </Button>
                ))}
            </nav>
        </div>
    );
}
