import AnimatedAvatar from './AnimatedAvatar';
import { Button } from '@/components/ui/button';
import { MoveRightIcon } from 'lucide-react';
import Projects from './Projects';
import Blog from './Blog';
import Testimonials from './Testimonials';
import Footer from './Footer';

import "./mobile-landing.scss";



export default function HomePage() {
  return (
    <main className="overflow-hidden landing-main">
      <div className="*:max-w-fd-container">
        <div className="mx-auto hero-container" style={{padding: "20vh 2vw"}}>
          <div className="flex flex-row gap-10 justify-between">
            <div>
              <h1 className="text-6xl mb-1 font-bold">Hi, I&apos;m Philipp Scheer</h1>
              <p className="text-2xl text-gray-500 mb-7">I plan, build and scale startup-style MVPs.</p>
              <p className="text-md text-gray-400 hero-subsubtitle">
                I&apos;m a full-stack dev who loves turning ideas into real, working products.
                I start with market research, build a quick MVP, and keep improving it through feedback.
                Fast, focused, and always solving real problems.
              </p>
            </div>

            <div className="relative w-48 h-48 avatar-container" style={{marginRight: 150}}>
              <AnimatedAvatar />
            </div>
          </div>

          <Button>
            View my work
            <MoveRightIcon />
          </Button>
        </div>
      </div>

      <Projects />

      <Blog />

      <Testimonials />

      <Footer />
    </main>
  );
}
