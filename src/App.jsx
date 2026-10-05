import { CustomCursor } from './components/animation/CustomCursor';
import { ScrollProgress } from './components/animation/ScrollProgress';
import { TopBar } from './components/layout/TopBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { AboutSection } from './components/sections/AboutSection';
import { EventsSection } from './components/sections/EventsSection';
import { SportsSection } from './components/sections/SportsSection';
import { PhilosophySection } from './components/sections/PhilosophySection';
import { StatsSection } from './components/sections/StatsSection';
import { RankingsSection } from './components/sections/RankingsSection';
import { PersonalitiesSection } from './components/sections/PersonalitiesSection';
import { LeadersSection } from './components/sections/LeadersSection';
import { AwardsSection } from './components/sections/AwardsSection';
import { VirtualTourSection } from './components/sections/VirtualTourSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { CollaborationsSection } from './components/sections/CollaborationsSection';
import { ContactSection } from './components/sections/ContactSection';
import { useTheme } from './hooks/useTheme';
import './styles/globals.css';

export default function App() {
    const [theme, toggleTheme] = useTheme();

    return (
        <>
            <ScrollProgress />
            <CustomCursor />
            <TopBar/>
            <Navbar
                theme={theme}
                onToggleTheme={toggleTheme}
            />

            <main>
                <HeroSection />
                <MarqueeSection />
                <AboutSection />
                <EventsSection />
                <SportsSection />
                <PhilosophySection />
                <StatsSection />
                <RankingsSection />
                <PersonalitiesSection />
                <LeadersSection />
                <AwardsSection />
                <VirtualTourSection />
                <TestimonialsSection />
                <CollaborationsSection />
                <ContactSection />
            </main>

            <Footer />
        </>
    );
}