import CTAButton from '@/components/CTAButton';
import SecondaryButton from '@/components/SecondaryButton';

//TODO: centralize color with primary and secondary colors
//TODO: centralize routes
//TODO: fix the scrollbar on landing page from the <main className="min-h-screen">
export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-7xl font-bold flex flex-col text-center text-[#203756]">
                <span>Your interests displayed</span>
                <span>broadly in one</span>
                <span>simulation</span>
            </h1>
            <h2 className="m-6 text-2xl">
                Get a reel feel of what investing in this strategy is over the
                years
            </h2>
            <div>
                <CTAButton href="/calculator">Start Now</CTAButton>
                <SecondaryButton href="/login">Login</SecondaryButton>
            </div>
        </main>
    );
}
