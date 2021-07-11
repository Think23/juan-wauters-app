import Image from "next/image";
import aboutImage from "../../static/images/about/about-image.jpg";
import classes from "./index.module.css";

function About() {
  return (
    <div className={classes.About} style={{ height: "100%" }}>

        <h1>About Juan</h1>
        <div className={classes.image}>
          <Image
            src={aboutImage}
            alt="juan-wauters-bio"
            width="1500px"
            height="1000px"
          />
        </div>
        <div className={classes.paragraph}>
          <p>
            There’s an almost mythological quality to the world of Juan Pablo
            Wauters. The Uruguayan-born, Jackson Heights, NY-dwelling musician
            is best known not for a specific musical style, but instead for the
            crystalline sincerity that underpins everything he does: from the
            heartfelt earnestness of his lyricism to the playful rituals of his
            live shows (singalongs, covers, races). To be a fan of his music is
            to be invited into the ever-expanding cast of characters that
            animate his work - Wauters has a knack for fostering community
            wherever he goes.{" "}
          </p>
          <p>
            A founding member of Queens garage act The Beets, Wauters began
            releasing music under his own name in 2014 with N.A.P. North
            American Poetry. Released on Captured Tracks, his solo debut had the
            same candid charm and DIY sound as his work with the Beets, but with
            a folk-inspired, introspective glaze that would become his
            signature. 2015’s Who, Me? honed in on those qualities, full of
            clever ruminations on the pace of day-to-day life sung in both
            English and his native Spanish.
          </p>
          <p>
            After the release of Who, Me? Wauters spent several years touring
            and travelling the world, including a long stint in Latin America —
            from Argentina, Uruguay, Peru, and Chile to Mexico and Puerto Rico —
            where he began working on his next project. Inviting local musicians
            to contribute to the songs he was working on, Wauters emerged with a
            collection steeped in the musical traditions of each country he’d
            visited. As a result, 2018’s ​La Onda De Juan Pablo​ and its
            follow-up, Introducing Juan Pablo,​ became his most expansive and
            sonically diverse records to date, tracing both his Uruguayan roots
            and his travellers’ spirit. Elements he’d flirted with in the past -
            singing in Spanish, traditional instruments like bongo drums and
            marimba, the collaborative spirit of his live shows - came to the
            forefront on these releases.{" "}
          </p>
          <p>
            Wauters’ chameleonic songwriting has continued to evolve in recent
            years: on his latest effort, Real Life Situations, he’s delved
            deeper into collaboration, teaming up with Mac DeMarco, Peter Sagar
            (AKA Homeshake), Nick Hakim, Cola Boyy, El David Aguilar, and more
            for experiments in hip-hop, lo-fi R&B, and deft indie folk. With
            some of his recording plans hampered by the COVID-19 pandemic, he
            mined older songs, phone notes, new material, and snippets from TV
            and YouTube to craft an aural document of the year through his eyes.
            Under his care, these small moments become coordinates for the peaks
            and valleys of human experience, coloring the album with Wauters’
            unique shade of realism.
          </p>
          <p>
            Perhaps this realism is what makes Wauters such an inimitable
            artist. His music has always sprung from the interplay between
            genre-hopping eclecticism and earnest, plain-spoken observation.
            Themes of loneliness, personal growth, patience, and companionship
            arise again and again in his work, just as they do in life. Each
            time though, he manages to breathe new life into them - to listen to
            his music is to navigate a rapidly-changing world with him in real
            time. His unique ability to produce that feeling - via his music,
            his live show, even his social media presence - ensures that no
            matter where his travels take him, he’ll be welcomed with open arms.
          </p>
        </div>

        <div className={classes.contacts}>
          <div>
            <h2>Management</h2>
            <p>
              <a href="mailto:gustavo@juanwauters.com">
                gustavo@juanwauters.com
              </a>
            </p>
          </div>
          <div>
            <h2>Label and Rights</h2>
            <p>
              <a href="mailto:mandy@omnianmusicgroup.com">
                mandy@omnianmusicgroup.com
              </a>
            </p>
          </div>
          <div>
            <h2>Press</h2>
            <p>
              North America
              <br />
              <a href="mailto:natalie@omnianmusicgroup.com">
                natalie@omnianmusicgroup.com
              </a>
            </p>
            <p>
              UK and EU
              <br />
              <a href="mailto:chris.cuff@goodmachinepr.com">
                chris.cuff@goodmachinepr.com
              </a>
            </p>
          </div>
          <div>
            <h2>Booking</h2>
            <p>
              North America
              <br />
              <a href="mailto:gustavo@juanwauters.com">
                gustavo@juanwauters.com
              </a>
            </p>
            <p>
              UK, EU and ASIA
              <br />
              <a href="mailto:felipe@atc-live.com">felipe@atc-live.com </a>
            </p>
          </div>
        </div>
        <style global jsx>{`
            body {
              background-image: none!important;
              background-color: #FFF!important;
              width: 100%;
              overflow: auto!important;
              position: relative!important;
            }
            html {
              overflow: auto!important;
              height: auto!important;
            }
            body::-webkit-scrollbar {
              display: none;
            }
            `}</style>
    </div>
  );
}

export default About;
