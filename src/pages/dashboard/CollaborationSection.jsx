import collaborationImg1 from "../../assets/download (1).png";
import collaborationImg2 from "../../assets/download (2).png";
import collaborationImg3 from "../../assets/download (3).png";
import collaborationImg4 from "../../assets/download (4).png";
import collaborationImg6 from "../../assets/download (6).png";

const CollaborationSection = () => {
  const items = [
    {
      id: 0,
      image: collaborationImg1,
      title: "Manage complicated projects easily",
      description:
        "Manage projects and tasks easily from one place. Identify delays, view workloads, and see where your attention is needed everything from one screen. Keep everyone aligned.",
    },
    {
      id: 1,
      image: collaborationImg2,
      title: "Start new projects in minutes",
      description:
        "Use pre-built templates to skip repetitive project assignments. Choose from 150+ ready-to-use templates to instantly launch projects and start executing.",
    },
    {
      id: 2,
      image: collaborationImg3,
      title: "Send automatic reminders to teams",
      description:
        "Never ask for follow-ups again. Automatically send reminders for new tasks, delays, and completions via WhatsApp and in-app notifications, so deadlines are never missed.",
    },
    {
      id: 3,
      image: collaborationImg4,
      title: "Easily assign location based tasks",
      description:
        "Assign tasks to field teams for specific locations using smart geofencing. Ensure every task is completed at the right place and the right time. Control where teams can log in from.",
    },
    {
      id: 4,
      image: collaborationImg6,
      title: "Work easily with cross teams",
      description:
        "Create dependent and group tasks with cross teams easily. Add multiple members in a task. Let everyone know who's waiting on what. Seamless coordination.",
    },
    {
      id: 5,
      image: collaborationImg1,
      title: "Let AI check the work for you",
      description:
        "Skip spending hours on manual proof checks. Upload an image and let AI instantly verify the task. It flags errors and automatically confirms when a task is completed.",
    },
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto  overflow-hidden text-white">
      <div className="relative">
        <div className="relative mx-auto  px-4 pb-20">
          <h2 className="mx-auto   text-center text-[34px]  font-semibold leading-tight tracking-[0.02em] sm:text-5xl sm:leading-tight md:text-[65px]">
            Everything You Need For
            <br />
            Clarity, Control, &amp; Collaboration
          </h2>

          <div className="mt-16 grid ">
            {items.map((item, idx) => (
              <div
                key={item.id}
                className={`grid items-center md:grid-cols-[40%_60%] ${idx !== 0 ? "mt-[128px]" : ""}`}
              >
                <div className="relative mx-auto w-full max-w-[620px]">
                  <img
                    src={item.image}
                    alt="Collaboration"
                    className="h-auto w-full max-w-full object-contain md:max-h-none max-h-[420px]"
                  />
                </div>

                <div className="mx-auto w-full max-w-[760px] text-left md:text-left">
                  <h3 className="text-white mb-4 md:text-[42px] text-[20px] font-medium">
                    {item.title}
                  </h3>
                  <p className="text-[#D0D1D2] md:text-[22px] text-[14px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
