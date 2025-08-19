import ProjectList from '@/app/components/Projects/ProjectList';
import Background from '@/app/components/Projects/Background';

export default function Projects() {
    return (
        <>
            {/* Background - Fixed behind all content */}
            <Background />
            
            {/* Main content over background */}
            <main className="relative z-10]">
                <ProjectList />
            </main>
        </>
    )
}
