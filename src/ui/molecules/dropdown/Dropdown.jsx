import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa";
import PropTypes from "prop-types";
const Dropdown = ({ content, dropdownValues, onClick }) => {
  return (
    <div>
      <Menu as="div" className="relative">
        <Menu.Button>
          <span className="flex items-center text-slate-700 ml-8">
            {content} <FaAngleDown className="ml-2.5" />
          </span>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="p-2">
              {dropdownValues.map((item) => (
                <Menu.Item as="div" key={item.id} className="text-slate-800">
                  {({ active }) => (
                    <button
                      value={item.value}
                      onClick={onClick}
                      className={`${
                        active ? "bg-blue-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {item.label}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

Dropdown.propTypes = {
  content: PropTypes.string,
  dropdownValues: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
};

export default Dropdown;
