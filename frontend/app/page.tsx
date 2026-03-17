import LinkButton from '@/components/LinkButton';
import { routes } from '@/config/routes';

//TODO: fix the scrollbar on landing page from the <main className="min-h-screen">
export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-7xl font-bold flex flex-col text-center text-primary">
                <span>Your interests displayed</span>
                <span>broadly in one</span>
                <span>simulation</span>
            </h1>
            <h2 className="m-6 text-2xl text-secondary text-center">
                Get a reel feel of what investing in this strategy is over the
                years
            </h2>
            <div>
                <LinkButton variant="cta" href={routes.calculator}>
                    Start Now
                </LinkButton>
                <LinkButton variant="secondary" href={routes.login}>
                    Login
                </LinkButton>
            </div>
        </main>
    );
}
