"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-slate-300 m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <div className="flex flex-row justify-around ">
            <img
              src="https://res.cloudinary.com/atharva7/image/upload/v1678446486/samples/istockphoto-1335169133-612x612-removebg-preview_shco6q.png"
              alt="up"
              className="w-16 h-16 object-cover rounded-full cursor-pointer mt-1"
            />
            <Link
              href="/"
              className="pt-2 text-blueGray-700 text-xl font-bold leading-relaxed inline-block mr-4 py-4 whitespace-nowrap uppercase"
            >
              Guardify
            </Link>
          </div>
          {/* User */}
          {/* <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul> */}
          {/* Collapse */}
          {/* <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          > */}
          {/* Collapse header */}
          <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
            <div className="flex flex-wrap">
              <div className="w-6/12">
                <Link
                  href="/"
                  className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                >
                  Guardify
                </Link>
              </div>
              <div className="w-6/12 flex justify-end">
                <button
                  type="button"
                  className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                  //   onClick={() => setCollapseShow("hidden")}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>
          {/* Form */}
          <form className="mt-6 mb-4 md:hidden">
            <div className="mb-3 pt-0">
              <input
                type="text"
                placeholder="Search"
                className="border-0 px-3 py-2 h-12 border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
              />
            </div>
          </form>

          {/* Divider */}
          <hr className="my-4 md:min-w-full" />
          {/* Heading */}
          <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
            Features
          </h6>
          {/* Navigation */}

          <ul className="md:flex-col md:min-w-full flex flex-col list-none">
            <li className="items-center">
              <Link
                href="/analyze"
                className={
                  "text-sm uppercase py-3 font-bold block " +
                  (pathname !== "/analyze"
                    ? // (router.pathname.indexOf("/analyze") !== -1
                      "text-lightBlue-500 hover:text-lightBlue-600"
                    : "text-blueGray-700 hover:text-blueGray-500")
                }
              >
                <i
                  className={
                    "fas fa-tv mr-2 text-sm " +
                    (pathname !== "/analyze"
                      ? //   (router.pathname.indexOf("/analyze") !== -1
                        "opacity-75"
                      : "text-blueGray-300")
                  }
                ></i>
                Analyze Followings
              </Link>
            </li>

            <li className="items-center">
              <Link
                href="/view-complaint"
                className={
                  "text-sm uppercase py-3 font-bold block " +
                  (pathname !== "/view-complaint"
                    ? // (router.pathname.indexOf("/view-complaint") !== -1
                      "text-lightBlue-500 hover:text-lightBlue-600"
                    : "text-blueGray-700 hover:text-blueGray-500")
                }
              >
                <i
                  className={
                    "fas fa-tv mr-2 text-sm " +
                    (pathname !== "/view-complaint"
                      ? //   (router.pathname.indexOf("/view-complaint") !== -1
                        "opacity-75"
                      : "text-blueGray-300")
                  }
                ></i>
                View Complaints
              </Link>
            </li>

            <li className="items-center">
              <Link
                href="/text"
                className={
                  "text-sm uppercase py-3 font-bold block " +
                  (pathname !== "/text"
                    ? // (router.pathname.indexOf("/text") !== -1
                      "text-lightBlue-500 hover:text-lightBlue-600"
                    : "text-blueGray-700 hover:text-blueGray-500")
                }
              >
                <i
                  className={
                    "fas fa-tv mr-2 text-sm " +
                    (pathname !== "/text"
                      ? //   (router.pathname.indexOf("/text") !== -1
                        "opacity-75"
                      : "text-blueGray-300")
                  }
                ></i>
                Analyze Text
              </Link>
            </li>

            <li className="items-center">
              <Link
                href="/cybercell"
                className={
                  "text-sm uppercase py-3 font-bold block " +
                  (pathname !== "/cybercell"
                    ? // (router.pathname.indexOf("/cybercell") !== -1
                      "text-lightBlue-500 hover:text-lightBlue-600"
                    : "text-blueGray-700 hover:text-blueGray-500")
                }
              >
                <i
                  className={
                    "fas fa-tv mr-2 text-sm " +
                    (pathname !== "/cybercell"
                      ? //   (router.pathname.indexOf("/cybercell") !== -1
                        "opacity-75"
                      : "text-blueGray-300")
                  }
                ></i>
                CyberCell Locator
              </Link>
            </li>

            <li className="items-center">
              <Link
                href="/guidelines"
                className={
                  "text-sm uppercase py-3 font-bold block " +
                  (pathname !== "/guidelines"
                    ? // (router.pathname.indexOf("/guidelines") !== -1
                      "text-lightBlue-500 hover:text-lightBlue-600"
                    : "text-blueGray-700 hover:text-blueGray-500")
                }
              >
                <i
                  className={
                    "fas fa-tv mr-2 text-sm " +
                    (pathname !== "/guidelines"
                      ? //   (router.pathname.indexOf("/guidelines") !== -1
                        "opacity-75"
                      : "text-blueGray-300")
                  }
                ></i>
                Guidelines
              </Link>
            </li>

            {/* <li className="items-center">
                    <Link href="/crop">
                      <a
                        className={
                          "text-sm uppercase py-3 font-bold block " +
                          (router.pathname.indexOf("/crop") !== -1
                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                            : "text-blueGray-700 hover:text-blueGray-500")
                        }
                      >
                        <i
                          className={
                            "fas fa-tools mr-2 text-sm " +
                            (router.pathname.indexOf("/crop") !== -1
                              ? "opacity-75"
                              : "text-blueGray-300")
                          }
                        ></i>{" "}
                        Crop
                      </a>
                    </Link>
                  </li>
    
                  <li className="items-center">
                    <Link href="/fertilizer">
                      <a
                        className={
                          "text-sm uppercase py-3 font-bold block " +
                          (router.pathname.indexOf("/fertilizer") !== -1
                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                            : "text-blueGray-700 hover:text-blueGray-500")
                        }
                      >
                        <i
                          className={
                            "fas fa-table mr-2 text-sm " +
                            (router.pathname.indexOf("/fertilizer") !== -1
                              ? "opacity-75"
                              : "text-blueGray-300")
                          }
                        ></i>{" "}
                        Fertilizer
                      </a>
                    </Link>
                  </li>
    
                  <li className="items-center">
                    <Link href="/shop">
                      <a
                        className={
                          "text-sm uppercase py-3 font-bold block " +
                          (router.pathname.indexOf("/shop") !== -1
                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                            : "text-blueGray-700 hover:text-blueGray-500")
                        }
                      >
                        <i
                          className={
                            "fas fa-table mr-2 text-sm " +
                            (router.pathname.indexOf("/shop") !== -1
                              ? "opacity-75"
                              : "text-blueGray-300")
                          }
                        ></i>{" "}
                        Fertilizer Shop
                      </a>
                    </Link>
                  </li>
    
                  <li className="items-center">
                    <Link href="/labs">
                      <a
                        className={
                          "text-sm uppercase py-3 font-bold block " +
                          (router.pathname.indexOf("/labs") !== -1
                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                            : "text-blueGray-700 hover:text-blueGray-500")
                        }
                      >
                        <i
                          className={
                            "fas fa-table mr-2 text-sm " +
                            (router.pathname.indexOf("/labs") !== -1
                              ? "opacity-75"
                              : "text-blueGray-300")
                          }
                        ></i>{" "}
                        Labs
                      </a>
                    </Link>
                  </li>
    
                  <li className="items-center">
                    <Link href="/weather">
                      <a
                        href="#pablo"
                        className={
                          "text-sm uppercase py-3 font-bold block " +
                          (router.pathname.indexOf("/weather") !== -1
                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                            : "text-blueGray-700 hover:text-blueGray-500")
                        }
                      >
                        <i
                          className={
                            "fas fa-map-marked mr-2 text-sm " +
                            (router.pathname.indexOf("/weather") !== -1
                              ? "opacity-75"
                              : "text-blueGray-300")
                          }
                        ></i>{" "}
                        Weather
                      </a>
                    </Link>
                  </li>
    
                  <li className="items-center">
                    <Link href="/news">
                      <a
                        href="#pablo"
                        className={
                          "text-sm uppercase py-3 font-bold block " +
                          (router.pathname.indexOf("/news") !== -1
                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                            : "text-blueGray-700 hover:text-blueGray-500")
                        }
                      >
                        <i
                          className={
                            "fas fa-map-marked mr-2 text-sm " +
                            (router.pathname.indexOf("/news") !== -1
                              ? "opacity-75"
                              : "text-blueGray-300")
                          }
                        ></i>{" "}
                        News
                      </a>
                    </Link>
                  </li> */}

            {/* Divider */}
            {/* <hr className="my-4 md:min-w-full" />
                  <li className="flex items-center">
                    <div
                      className="px-3 py-4 text-xs uppercase font-bold"
                      id="google_translate_element"
                    ></div>
                  </li> */}
          </ul>
          {/* Heading */}
          {/* <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                  No Layout Pages
                </h6> */}
          {/* Navigation */}
          {/* </div> */}
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
