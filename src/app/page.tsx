import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import presentationIllustration from "../../public/images/airfocus-K_VeavYEfdA-unsplash.jpg";
import open from "../../public/images/share (1).png";

const reviews = [
    {
        name: "Ananya Mehta",
        username: "@ananya_sales",
        body: "Presentation Analyzer saved me hours before a client pitch. It summarized key insights and highlighted gaps I hadn’t noticed, making my deck flow seamlessly.",
    },
    {
        name: "Rohit Sharma",
        username: "@rohit_marketing",
        body: "As a marketing manager, I loved how it checked branding consistency and suggested design tweaks. My slides looked polished and professional instantly.",
    },
    {
        name: "Priya Nair",
        username: "@priya_educator",
        body: "I use it for my lectures. The AI helps me simplify content and ensure my slides are engaging for students while maintaining clarity in key concepts.",
    },
    {
        name: "Arjun Khanna",
        username: "@arjun_exec",
        body: "Before board meetings, this tool is a lifesaver. It points out missing context, suggests smoother transitions, and ensures my story is clear to stakeholders.",
    },
    {
        name: "Simran Kaur",
        username: "@simran_designer",
        body: "Even as a designer, I found the automated design checks helpful. It caught alignment issues and suggested visual balance improvements I might have missed.",
    },
    {
        name: "Karan Verma",
        username: "@karan_consultant",
        body: "I recommend this to all my clients. Instead of manually reviewing slides, they get instant feedback on structure, flow, and audience alignment.",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    name,
    username,
    body,
}: {
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 bg-zinc-100  shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                {/* <Image
                    className="rounded-full"
                    width="32"
                    height="32"
                    alt=""
                    src={profile}
                /> */}
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">
                        {username}
                    </p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

const steps = [
    {
        title: "Step 1: Upload Presentation",
        description:
            "User uploads a presentation deck (PPTX, PDF, or Keynote). The system securely processes the file with encrypted transfers. (API: /upload-presentation)",
    },
    {
        title: "Step 2: Content Summarization",
        description:
            "AI extracts main points, key themes, and insights from each slide, providing a concise overview of the entire presentation. (API: /summarize-content)",
    },
    {
        title: "Step 3: Structure & Flow Analysis",
        description:
            "The tool analyzes narrative coherence, checks for logical gaps, and evaluates slide transitions for better storytelling. (API: /analyze-structure)",
    },
    {
        title: "Step 4: Design & Visual Review",
        description:
            "AI reviews slide layouts for clarity, consistency, and visual impact. Suggestions include formatting, color balance, and alignment fixes. (API: /review-design)",
    },
    {
        title: "Step 5: Audience Readiness Check",
        description:
            "The system evaluates if the content aligns with the intended audience, recommending additional context or simplifications where needed. (API: /audience-check)",
    },
    {
        title: "Step 6: Actionable Recommendations",
        description:
            "Generates concise feedback on improving content, design, and structure, along with engagement-focused suggestions. (API: /recommendations)",
    },
    {
        title: "Step 7: Export & Share Insights",
        description:
            "Export analysis as a PDF or DOCX report, or share improvement suggestions with collaborators directly. (API: /export-analysis)",
    },
];

export default function Home() {
    return (
        <main className="mx-auto bg-zinc-100">
            <section className="pt-20 px-4 md:px-36 flex flex-col justify-center items-center text-center">
                {/* Badge */}
                <div className="group mb-5 relative mx-auto flex items-center justify-center rounded-full px-2 py-1.5 bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white">
                    <h1 className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-full h-8 w-8 flex justify-center items-center">
                        📊
                    </h1>

                    <div className="text-sm px-3 font-medium text-zinc-600">
                        AI-Powered Presentation Analyzer
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-primary mb-6">
                    Analyze & Improve Your Presentations <br /> in Seconds with
                    AI
                </h1>

                {/* Subheading */}
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
                    Automatically review your slides for clarity, structure, and
                    design. Get instant, actionable feedback to make your
                    presentations more effective, engaging, and audience-ready.
                </p>

                {/* CTA */}
                <div>
                    <Link
                        href="/analyze"
                        className="rounded-full px-4 py-2 text-xl hover:shadow-lg cursor-pointer text-zinc-600 bg-zinc-100 shadow-zinc-500 shadow-md flex items-center gap-2"
                    >
                        <span>Analyze My Presentation</span>
                        <div className="rounded-full h-9 w-9 flex justify-center items-center hover:shadow-lg cursor-pointer text-zinc-600 bg-zinc-100 shadow-zinc-500 shadow-md">
                            <Image
                                src={open}
                                alt="open icon"
                                className="h-6 w-6"
                            />
                        </div>
                    </Link>
                </div>
            </section>

            <section className="pt-20 lg:pt-32 pb-10 px-4 md:px-36 mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    How It Works
                    {/* <AuroraText>How It Works</AuroraText> */}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="px-5 py-4 bg-zinc-100  shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl  min-h-[180px] h-full"
                        >
                            <div className="p-0">
                                <h3 className="text-lg font-semibold text-primary">
                                    {step.title}
                                </h3>
                            </div>
                            <div className="p-0 mt-2">
                                <p className="text-muted-foreground text-sm leading-snug">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="flex mt-10 gap-8 flex-col md:flex-row items-center justify-between px-4 md:px-36 py-12">
                {/* Text Section */}
                <div className="md:w-1/2 text-center md:text-left space-y-4 order-2 md:order-1">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary">
                        Transform Your Presentations with AI Insights.
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Our AI Presentation Analyzer reviews your slides to
                        ensure clarity, structure, and impact. It extracts key
                        insights, checks narrative flow, and provides actionable
                        design recommendations—helping you deliver more
                        effective and audience-ready presentations.
                    </p>
                    <div className="mt-4">
                        <Link href="/analyze">
                            <button className="shadow-2xl">
                                <span className="rounded-full px-4 py-2 text-xl hover:shadow-lg cursor-pointer text-zinc-600 bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white">
                                    ● Analyze My Presentation
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 mt-10 md:mt-0 order-1 md:order-2 flex bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white p-2 rounded-2xl justify-center">
                    <Image
                        src={presentationIllustration} // Replace with illustration relevant to presentation analysis
                        alt="AI Presentation Analyzer"
                        className="w-full shadow-lg h-full rounded-lg object-cover"
                        width={10}
                        height={10}
                        unoptimized
                    />
                </div>
            </section>

            <section className="mx-4 mt-20 md:mx-36">
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:20s]">
                        {firstRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:20s]">
                        {secondRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                </div>
            </section>

            <section className="px-4 md:px-36 mt-20 bg-zinc-100 py-10">
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    <h1 className="text-4xl mb-5 font-bold">FAQ&apos;S</h1>

                    <AccordionItem
                        value="item-1"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1"
                    >
                        <AccordionTrigger>
                            1. What is the Presentation Analyzer?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                It&apos;s an AI-powered tool that reviews your
                                presentation decks, summarizes key points,
                                checks structure, and provides actionable design
                                and content improvements to help you deliver
                                impactful presentations.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-2"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1"
                    >
                        <AccordionTrigger>
                            2. How does it work?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Upload your presentation or paste slide content.
                                The AI analyzes flow, structure, and visuals,
                                then suggests concise improvements for clarity,
                                consistency, and audience engagement.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-3"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1"
                    >
                        <AccordionTrigger>
                            3. Can it check design and visuals?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Yes. It reviews slide layouts, typography,
                                colors, and overall consistency—offering
                                recommendations to make your presentation
                                visually engaging and professional.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-4"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1"
                    >
                        <AccordionTrigger>
                            4. Does it analyze audience readiness?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Absolutely. The tool evaluates whether the
                                slides align with your intended audience,
                                highlighting areas where more clarity, context,
                                or simplification may be needed.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-5"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1"
                    >
                        <AccordionTrigger>
                            5. Can I use it for different types of
                            presentations?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Yes. It&apos;s useful for sales pitches,
                                investor decks, academic lectures, marketing
                                campaigns, or any professional presentation
                                where clarity and impact are essential.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-6"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1"
                    >
                        <AccordionTrigger>
                            6. Who can benefit from this tool?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Sales teams, executives, educators, marketers,
                                startups, and anyone who needs actionable
                                feedback to make presentations more effective
                                and professional.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-7"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1"
                    >
                        <AccordionTrigger>
                            7. Can it provide engagement metrics?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Where supported, the tool can analyze past
                                performance data to identify high-engagement
                                slides, topics, or sections that resonate most
                                with your audience.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-8"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1"
                    >
                        <AccordionTrigger>
                            8. Is my data secure?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Yes. All data is processed securely with
                                encryption and temporary storage. Your
                                presentations remain private and are never
                                shared.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>
        </main>
    );
}
