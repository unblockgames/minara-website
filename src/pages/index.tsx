import ServiceCard from "@/components/ServiceCard";
import Tactic from "@/components/Tactic";
import TeacherCard from "@/components/TeacherCard";
import Image from "next/image";

const teachers = [
  {
    name: "Minara Beck",
    languages: "German English Russian",
    image: "/images/minara_hero.webp",
    title: "Teacher/Philolog",
    phone: "+1 (646) 675-2606",
    country: "USA",
    city: "Austin, TX",
    email: "minara.beck@mail.ru",
  },
];

const services = [
  {
    image: "/images/services_1.svg",
    name: "Beginner",
    price: 30,
    level: "A1-A2",
    description: `If you enter our school as a beginner, it means you haven’t had any contact with the language or have but, passively.`,
  },
  {
    image: "/images/services_2.svg",
    name: "Intermediate",
    price: 40,
    level: "B1-B2",
    description: `Can interact and be spontaneous but has problems with grammar and vocabulary.`,
  },
  {
    image: "/images/services_3.svg",
    name: "Advanced",
    price: 50,
    level: "C1-C2",
    description: `Can understand almost everything including idiomatic expressions and can compose complex texts and can use the language for professional or social usage.`,
  },
];

const tactics = [
  {
    image: "/images/tactic_1.svg",
    title: "SPEECH-LANGUAGE PATHOLOGIST",
    descriptionHtml: `
    <p style="text-align: start;color: rgb(var(--color_15));font-size: 18px;border: 0px;">A speech-language pathologist (SLP) helps children with communication and swallowing difficulties. SLPs can work on the following skills:</p>
<p style="text-align: center;color: rgb(var(--color_15));font-size: 18px;border: 0px;"><strong><span style="border: 0px;">Speech Sounds</span></strong></p>
<p style="text-align: start;color: rgb(var(--color_15));font-size: 18px;border: 0px;">SLPs work with kids with articulation or phonological disorders who have difficulty saying speech sounds. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
<p style="text-align: center;color: rgb(var(--color_15));font-size: 18px;border: 0px;"><span style="color: rgb(var(--color_15));border: 0px;"><strong><span style="border: 0px;">&nbsp;Language</span></strong></span></p>
<p style="text-align: start;color: rgb(var(--color_15));font-size: 18px;border: 0px;">Language skills are important for oral and written communication. SLPs can help children improve their expressive language (the ability to express themselves) and receptive language (the ability to understand spoken language and directions).</p>
<p style="text-align: center;color: rgb(var(--color_15));font-size: 18px;border: 0px;"><strong><span style="border: 0px;">Stuttering</span></strong></p>
<p style="text-align: start;color: rgb(var(--color_15));font-size: 18px;border: 0px;">SLPs teach strategies to stutterers to help them manage their stuttering and feel less anxious when speaking.</p>
<p style="text-align: center;color: rgb(var(--color_15));font-size: 18px;border: 0px;"><strong><span style="border: 0px;">Social Communication</span></strong></p>
<p style="text-align: start;color: rgb(var(--color_15));font-size: 18px;border: 0px;">Social communication skills are important for making and maintaining friendships. SLPS helps improve a child&apos;s social skills by targeting turn-taking, joint attention, and perspective-taking. Speech-language pathologists can also help children play appropriately with others.</p>
<p style="text-align: center;color: rgb(var(--color_15));font-size: 18px;border: 0px;"><strong><span style="border: 0px;">Voice</span></strong></p>
<p style="text-align: start;color: rgb(var(--color_15));font-size: 18px;border: 0px;">SLPs help improve a child&apos;s voice quality, pitch, or loudness. These children might sound too high-pitched, hoarse, or loud.</p>
<p style="text-align: center;color: rgb(var(--color_15));font-size: 18px;border: 0px;"><strong><span style="border: 0px;">Feeding</span></strong></p>
<p style="text-align: start;color: rgb(var(--color_15));font-size: 18px;border: 0px;">Feeding or swallowing difficulties are also called dysphagia. SLPs help children with dysphagia improve their ability to swallow or chew food. Speech pathologists also work with babies and infants who have difficulty sucking milk from a bottle or from their mother.</p>
    `,
  },
  {
    image: "/images/tactic_2.svg",
    title: "TIPS FOR TAKING ONLINE CLASSES",
    descriptionHtml: `
    <p style="text-align: center;color: rgb(var(--color_15));font-size: 18px;border: 0px;"><strong><span style="border: 0px;">ENOUGH TIME</span></strong></p>
<p style="text-align: start;color: rgb(var(--color_15));font-size: 18px;border: 0px;">Online classes can actually take more time weekly than face-to-face classes</p>
<p style="text-align: center;color: rgb(var(--color_15));font-size: 18px;border: 0px;"><strong><span style="border: 0px;">REAL FOCUS</span></strong></p>
<p style="text-align: start;color: rgb(var(--color_15));font-size: 18px;border: 0px;">An online course requires you to take more responsibility for your progress than face-to-face classes</p>
<p style="text-align: center;color: rgb(var(--color_15));font-size: 18px;border: 0px;"><strong><span style="border: 0px;">BENEFITS</span></strong></p>
<p style="text-align: start;color: rgb(var(--color_15));font-size: 18px;border: 0px;">Accessibility and convenience are major pros of online learning</p>
<p style="text-align: center;color: rgb(var(--color_15));font-size: 18px;border: 0px;"><strong><span style="border: 0px;">TECHNOLOGY</span></strong></p>
<p style="text-align: start;color: rgb(var(--color_15));font-size: 18px;border: 0px;">You must have access to a reliable computer with high-speed internet</p>
<p style="text-align: center;color: rgb(var(--color_15));font-size: 18px;border: 0px;"><strong><span style="border: 0px;">COMMUNICATION</span></strong></p>
<p style="text-align: start;color: rgb(var(--color_15));font-size: 18px;border: 0px;">Nearly all communication is written, so is it critical that you feel comfortable expressing yourself in writing</p>
<p style="text-align: center;color: rgb(var(--color_15));font-size: 18px;border: 0px;"><strong><span style="border: 0px;">FREEDOM</span></strong></p>
<p style="text-align: start;color: rgb(var(--color_15));font-size: 18px;border: 0px;">No one is looking over your shoulder or presenting material that fosters independence!&nbsp;</p>
    `,
  },
  {
    image: "/images/tactic_3.svg",
    title: "SPEAK WITH CONFIDENCE",
    descriptionHtml: `
    <blockquote style="text-align: center;color: rgb(var(--color_15));font-size: 18px;border: 0px;"><span style="font-size: 18px;border: 0px;"><strong><span style="border: 0px;"><span style="border: 0px;"><span style="border: 0px;">LISTEN PROPERLY &amp; REPEAT</span></span></span></strong></span></blockquote>
<p style="text-align: start;color: rgb(var(--color_15));font-size: 18px;border: 0px;">We all have our favorite movies or television shows. But instead of just watching, listen carefully to what the character or host has to say and repeat the dialogue that interests you.</p>
<p style="text-align: center;color: rgb(var(--color_15));font-size: 18px;border: 0px;"><strong><span style="border: 0px;">FIND A FRIEND WHO CAN HELP YOU</span></strong></p>
<p style="text-align: start;color: rgb(var(--color_15));font-size: 18px;border: 0px;"><span style="font-size: 18px;border: 0px;">It&apos;s always difficult to practice by yourself, especially when it comes to improving your speaking skills. Therefore, find a like-minded group of friends or classmates who share your goal of becoming more confident in using English</span></p>
<p style="text-align: center;color: rgb(var(--color_15));font-size: 18px;border: 0px;"><strong><span style="border: 0px;">READ OUT LOUD</span></strong></p>
<p style="text-align: start;color: rgb(var(--color_15));font-size: 18px;border: 0px;">Spend at least 30 minutes everyday reading, and then another 30 minutes<br>reading out loud. This is a great way of developing your reading skills while practicing pronunciation as well as intonation of various words and lengths of sentences. Spend at least 30 minutes everyday reading, and then another 30 minutes<br>reading out loud. This is a great way of developing your reading skills while practicing pronunciation as well as intonation of various words and lengths of sentences.</p>
<p style="text-align: center; color: rgb(var(--color_15)); font-size: 18px; border: 0px;"><strong><span style="border: 0px;">DON&apos;T BE AFRAID, MAKING MISTAKES IS NORMAL</span></strong></p>
<p style="text-align: start;color: rgb(var(--color_15));font-size: 18px;border: 0px;">Remember: it&rsquo;s okay to make mistakes. If you find yourself stumbling across long or complicated words, simply stop &amp; give yourself a few seconds to breathe, then continue speaking.</p>
    `,
  },
  {
    image: "/images/tactic_4.svg",
    title: "TIPS TO PERFECT YOUR PUBLIC SPEAKING SKILLS IMPORTANT!",
    descriptionHtml: `
    <p style="text-align: center;color: rgb(var(--color_15));font-size: 18px;border: 0px;"><strong><span style="border: 0px;">Maintain Eye Contact</span></strong></p>
<p style="text-align: start;color: rgb(var(--color_15));font-size: 18px;border: 0px;">This makes audience members feel like they are having a conversation with you and also makes them more likely to pay attention to what are you saying</p>
<p style="text-align: center;color: rgb(var(--color_15));font-size: 18px;border: 0px;"><strong><span style="border: 0px;">Use Your Arms and Hands</span></strong></p>
<p style="text-align: start;color: rgb(var(--color_15));font-size: 18px;border: 0px;">People are more likely to remember concepts if they are associated with particular actions or movements.</p>
<p style="text-align: center;color: rgb(var(--color_15));font-size: 18px;border: 0px;"><strong><span style="border: 0px;">Smile</span></strong></p>
<p style="text-align: start;color: rgb(var(--color_15));font-size: 18px;border: 0px;">This will make your audience a lot more comfortable and relaxed</p>
<p style="text-align: center;color: rgb(var(--color_15));font-size: 18px;border: 0px;"><strong><span style="border: 0px;">Encourage Participation</span></strong></p>
<p style="text-align: start;color: rgb(var(--color_15));font-size: 18px;border: 0px;">Ask question. This will make the speech more engaging, memorable, and fun!</p>
<p style="text-align: center;color: rgb(var(--color_15));font-size: 18px;border: 0px;"><strong><span style="border: 0px;">Walk Around</span></strong></p>
<p style="text-align: start;color: rgb(var(--color_15));font-size: 18px;border: 0px;">Walk towards your audience, people tend to participate more when they have proximity to a speaker.</p>
    `,
  },
  {
    image: "/images/tactic_5.svg",
    title: "PUBLIC SPEAKING TIPS HOW TO ENGAGE WITH AUDIENCES",
    descriptionHtml: `
    <p style="text-align: start;color: rgb(var(--color_15));font-size: 18px;border: 0px;">Use anecdotes, stories, or examples to illustrate your points.</p>
<p style="text-align: start;color: rgb(var(--color_15));font-size: 18px;border: 0px;"><br></p>
<p style="text-align: start;color: rgb(var(--color_15));font-size: 18px;border: 0px;">Maintain eye contact with the audience to establish a connection.</p>
<p style="text-align: start;color: rgb(var(--color_15));font-size: 18px;border: 0px;"><br></p>
<p style="text-align: start;color: rgb(var(--color_15));font-size: 18px;border: 0px;">Encourage interaction through questions, rhetorical devices, or thought-provoking statements.</p>
<p style="text-align: start;color: rgb(var(--color_15));font-size: 18px;border: 0px;"><br></p>
<p style="text-align: start;color: rgb(var(--color_15));font-size: 18px;border: 0px;">Vary your tone, pace, and volume to add emphasis and maintain interest.</p>
<p style="text-align: start;color: rgb(var(--color_15));font-size: 18px;border: 0px;"><br></p>
<p style="text-align: start;color: rgb(var(--color_15));font-size: 18px;border: 0px;"><span style="border: 0px;"></span>Avoid reading your entire speech verbatim; instead, speak conversationally.</p>
    `,
  },
  {
    image: "/images/tactic_6.svg",
    title: "6 GREAT TIPS TO LEARN A NEW LANGUAGE",
    descriptionHtml: `
    <p style="text-align: left; color: rgb(var(--color_15)); font-size: 18px; border: 0px;"><span style="font-size: 18px;border: 0px;">Visualize and vocalize</span></p>
<p style="text-align: left; color: rgb(var(--color_15)); font-size: 18px; border: 0px;"><span style="font-size: 18px;border: 0px;"><span style="border: 0px;">Use gestures to memorize</span></span></p>
<p style="text-align: left; color: rgb(var(--color_15)); font-size: 18px; border: 0px;"><span style="font-size: 18px;border: 0px;"><span style="border: 0px;"><span style="border: 0px;">Often speak the language</span></span></span></p>
<p style="text-align: left; color: rgb(var(--color_15)); font-size: 18px; border: 0px;"><span style="font-size: 18px;border: 0px;"><span style="border: 0px;"><span style="border: 0px;">Write notes</span></span></span></p>
<p style="text-align: left; color: rgb(var(--color_15)); font-size: 18px; border: 0px;"><span style="font-size: 18px;border: 0px;"><span style="border: 0px;"><span style="border: 0px;">Learn about the culture</span></span></span></p>
<p style="text-align: left; color: rgb(var(--color_15)); font-size: 18px; border: 0px;"><span style="font-size: 18px;border: 0px;"><span style="border: 0px;"><span style="border: 0px;">Watch TV shows or movies in the&nbsp;</span></span></span><span style="font-size: 18px;border: 0px;"><span style="border: 0px;"><span style="border: 0px;">language.</span></span></span></p>
    `,
  },
];

export default function Home() {
  return (
    <main
      className={`flex flex-col h-full w-screen justify-center overflow-hidden`}
    >
      <section>
        <div className="flex flex-col items-center m-4">
          <h1 className={`text-2xl md:text-4xl`}>English German Russian</h1>
          <h1 className={`text-2xl md:text-4xl`}>
            classes with expert teachers!
          </h1>
          <hr className="w-10 h-1 bg-black my-8" />
          <p className={`md:text-lg font-bold mb-6`}>
            Become <u>fl</u>uent in a new language quickly and easily
          </p>
        </div>
        <div className="flex gap-12 justify-center">
          {teachers.map((teacher, idx) => (
            <TeacherCard key={idx} teacher={teacher} />
          ))}
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center bg-[#C9D6B5] mt-8 p-6">
          <h2 className={`text-4xl md:text-5xl font-bold m-8`}>Services</h2>
          <p className="md:text-lg mb-12">
            Our language courses are designed to be chosen by level
          </p>
          <div className="flex flex-col lg:flex-row gap-32 justify-center">
            {services.map((service, idx) => (
              <ServiceCard key={idx} serviceInfo={service} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col bg-[#AE582D] text-white items-center text-center p-6">
          <h2 className={`text-3xl md:text-5xl font-bold mb-4`}>
            Book an Appointment
            <br />
            online/offline
            <br />
            24/7
          </h2>
          <p className="md:w-[34rem] mb-20">
            We will ensure that students learn proper grammar, writing, hearing,
            and reading comprehension. We are responsible for creating lesson
            plans to teach students the necessary skills. Programs are available
            for schools, private groups, and educational institutions.
          </p>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center bg-[#C9D6B5] text-center relative overflow-x-clip">
          <h2 className={`font-bold text-2xl md:text-5xl m-8`}>
            Speak a new language in just
            <br />a few months!
          </h2>
          <p className="mb-10">Please follow these tactics:</p>
          <div className="z-1 bg-white absolute right-[-4rem] bottom-0">
            <Image
              className="mt-24 ml-4 hidden 2xl:block"
              src="/images/person_writing.webp"
              alt="person writing"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y divide-black divide-x">
            {tactics.map((tactic, idx) => (
              <Tactic key={idx} idx={idx} tactic={tactic} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="flex h-36 bg-[#C9D6B5] border-t border-black"></div>
      </section>
    </main>
  );
}
