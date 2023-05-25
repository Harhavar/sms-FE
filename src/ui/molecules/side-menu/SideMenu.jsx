const SideMenu = ({ heading, menu }) => {
  return (
    <div className="w-60 bg-white h-screen p-2.5">
      <div className="flex p-6">
        <span className="mr-4">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3V4C14 4.55228 14.4477 5 15 5H18C18.5523 5 19 5.44772 19 6V9C19 9.55228 18.5523 10 18 10H17C15.8954 10 15 10.8954 15 12C15 13.1046 15.8954 14 17 14H18C18.5523 14 19 14.4477 19 15V18C19 18.5523 18.5523 19 18 19H15C14.4477 19 14 18.5523 14 18V17C14 15.8954 13.1046 15 12 15C10.8954 15 10 15.8954 10 17V18C10 18.5523 9.55228 19 9 19H6C5.44772 19 5 18.5523 5 18V15C5 14.4477 4.55228 14 4 14H3C1.89543 14 1 13.1046 1 12C1 10.8954 1.89543 10 3 10H4C4.55228 10 5 9.55228 5 9V6C5 5.44772 5.44772 5 6 5H9C9.55228 5 10 4.55228 10 4V3Z"
              stroke="#44546F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span>{heading}</span>
      </div>
      <div className="flex flex-col">
        {menu.map((el) => (
          <span key={el.id} className="py-2.5 px-5 font-normal">
            {el.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
