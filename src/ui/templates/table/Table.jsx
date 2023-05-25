import { useState, useMemo } from "react";
import classNames from "classnames";
import { useTable, useFilters, useSortBy, usePagination } from "react-table";
import Select from "react-select";
import {
  FaSort,
  FaSortUp,
  FaSortDown,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Header from "@/organisms/header";
import Heading from "@/organisms/heading";
import Label from "@/atoms/Label";

const Table = ({
  title,
  subTitle,
  buttonContent,
  preFix,
  postfix,
  disable,
  headingButtonClick,
  columns,
  data,
  header,
  dropDownLabel,
}) => {
  const [tableData, setTableData] = useState(data);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data: tableData,
      initialState: { pageIndex: 0 },
    },
    useFilters,
    useSortBy,
    usePagination
  );

  const projectsFilterOptions = useMemo(() => {
    const options = [
      {
        label: "All",
        value: "all",
      },
    ];
    data.forEach((row) => {
      if (options.indexOf(row.name) === -1)
        options.push({
          label: row.name,
          value: row.name,
        });
    });
    return options;
  }, [data]);

  const statusFilterOptions = useMemo(() => {
    const options = [
      {
        label: "All",
        value: "all",
      },
    ];
    data.forEach((row) => {
      if (options.indexOf(row.status) === -1)
        options.push({
          label: row.status,
          value: row.status,
        });
    });
    return options;
  }, [data]);

  const handleProjectFilter = (e) => {
    if (e.value === "all") {
      setTableData(data);
    } else {
      setTableData(() => {
        return data.filter((el) => el.name === e.value);
      });
    }
  };

  const handleStatusFilter = (e) => {
    if (e.value === "all") {
      setTableData(data);
    } else {
      setTableData(() => {
        return data.filter((el) => el.status === e.value);
      });
    }
  };
  const pageNo = pageOptions.map((item) => [item + 1]);
  const showRow = page.map((item) => Number(item.id) + 1);

  return (
    <>
      <Header
        navLinks={header.navLinks}
        userDropdown={header.userDropdown}
        dropDownLabel={dropDownLabel}
      />
      <Heading
        title={title}
        subTitle={subTitle}
        buttonContent={buttonContent}
        preFix={preFix}
        postfix={postfix}
        disable={disable}
        headingButtonClick={headingButtonClick}
      />
      <div className="container flex mx-auto mt-6">
        <Select
          placeholder="Project Name"
          options={projectsFilterOptions}
          className="w-52 mr-2"
          onChange={handleProjectFilter}
        />
        <Select
          placeholder="Status"
          options={statusFilterOptions}
          className="w-52"
          onChange={handleStatusFilter}
        />
      </div>
      <div className="container m-auto mt-9">
        <Label
          color="text-slate-500"
          content={`Showing ${showRow[0]} - ${showRow[page.length - 1]} of ${
            tableData.length
          }`}
        />
      </div>
      <div className="container mt-4 mx-auto p-4 pb-0 bg-white border-2 rounded-lg border-slate-200">
        <table {...getTableProps({ className: "w-full" })}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps({
                      ...column.getSortByToggleProps(),
                      className:
                        "text-start pb-4 text-slate-800 text-sm font-medium border-b-2",
                    })}
                  >
                    <span className="flex items-center">
                      {column.render("Header")}
                      <span className="ml-2">
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <FaSortDown className="text-slate-300" />
                          ) : (
                            <FaSortUp className="text-slate-300" />
                          )
                        ) : (
                          <FaSort className="text-slate-300" />
                        )}
                      </span>
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps({
                    className: "border-b last:border-0 border-slate-200",
                  })}
                >
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps({
                          className: "py-4 text-sm text-slate-800",
                        })}
                      >
                        {cell.column.id === "serialNumber"
                          ? Number(row.id) + 1
                          : cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="container m-auto flex justify-between items-center h-10 mt-4 px-3">
        <span className="flex items-center">
          <span className="py-2.5 px-3 border border-neutral-300 rounded">
            <select
              className="text-neutral-500 focus:outline-none cursor-pointer text-sm font-normal w-10 bg-transparent"
              value={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
            >
              {pageNo?.map((item) => (
                <option style={{ width: "250px" }} key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </span>
          <span className="ml-2 text-neutral-500 font-medium text-base">
            of {pageOptions.length}
          </span>
          <span className="ml-9">
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              <FaChevronLeft
                className={classNames(
                  "text-xs",
                  !canPreviousPage ? "text-gray-500" : "text-neutral-900"
                )}
              />
            </button>{" "}
            <button
              className="ml-7"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              <FaChevronRight
                className={classNames(
                  "text-xs",
                  !canNextPage ? "text-gray-500" : "text-neutral-900"
                )}
              />
            </button>{" "}
          </span>
        </span>
        <span>
          <select
            className="text-neutral-500 focus:outline-none cursor-pointer text-xs font-medium bg-transparent"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize} Results Per Page
              </option>
            ))}
          </select>
        </span>
      </div>
    </>
  );
};
export default Table;
