import { useState } from "react";

const Projects = () => {
  const webProjects = [
    {
      id: 1,
      image: "../../project1.jpg",
      name: "projectName",
    },
    {
      id: 2,
      image: "../../project2.jpg",
      name: "projectName",
    },
    {
      id: 3,
      image: "../../project3.jpg",
      name: "projectName",
    },
    {
      id: 4,
      image: "../../project4.jpg",
      name: "projectName",
    },
    {
      id: 5,
      image: "../../project5.jpg",
      name: "projectName",
    },
    {
      id: 6,
      image: "../../project6.jpg",
      name: "projectName",
    },
  ];
  const mobileProjects = [
    {
      id: 1,
      image: "../../mobilep.jpg",
      name: "projectName",
    },
    {
      id: 2,
      image: "../../mobilep.jpg",
      name: "projectName",
    },
    {
      id: 3,
      image: "../../mobilep.jpg",
      name: "projectName",
    },
    {
      id: 4,
      image: "../../mobilep.jpg",
      name: "projectName",
    },
    {
      id: 5,
      image: "../../mobilep.jpg",
      name: "projectName",
    },
    {
      id: 6,
      image: "../../mobilep.jpg",
      name: "projectName",
    },
  ];
  const [showMobileProjects, setshowMobileProjects] = useState(true);
  const [showWebProjects, setshowWebProjects] = useState(false);

  return (
    <div
      name={"projects"}
      className="relatrive w-[100vw] h-[100vh] flex flex-col gap-10 place-items-center mt-10 "
    >
      <h1>پروژه های من</h1>
      <section className=" flex flex-row self-center gap-10 z-40">
        <button
          onClick={() => {
            setshowMobileProjects(true);
            setshowWebProjects(false);
          }}
          className=" px-12 py-12 hover:cursor-pointer hover:bg-gradient-to-t from-red-400 to-black flex bg-yellow-200"
        >
          موبایل
        </button>
        <button
          onClick={() => {
            setshowMobileProjects(false);
            setshowWebProjects(true);
          }}
          className=" px-12 py-12 hover:cursor-pointer hover:bg-gradient-to-t from-red-400 to-black flex bg-yellow-200"
        >
          وب
        </button>
      </section>
      <section className=" grid grid-cols-3 gap-10 mt-0 ">
        {showMobileProjects && (
          <>
            {mobileProjects?.map((item, index) => {
              return (
                <div
                  key={index}
                  className={` flex flex-col bg-red-100 place-items-center gap-5 `}
                >
                  <img
                    src={item.image}
                    alt="img"
                    className=" w-[50%] h-[50%] "
                  />
                  <h1>{item.name} </h1>
                </div>
              );
            })}
          </>
        )}
        {/* بررسی کن دو حالت ترنزیشن و بدون اون رو */}
        {showWebProjects && (
          <>
            {webProjects?.map((item, index) => {
              return (
                <div
                  key={index}
                  className={` flex flex-col bg-violet-200 place-items-center gap-5 `}
                >
                  <img
                    src={item.image}
                    alt="img"
                    className=" w-[50%] h-[50%] "
                  />
                  <h1>{item.name} </h1>
                </div>
              );
            })}
          </>
        )}
      </section>
    </div>
  );
};

export default Projects;
