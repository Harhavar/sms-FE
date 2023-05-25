import Header from "@/organisms/header";
import Heading from "@/molecules/heading";
import SecondaryHeader from "@/organisms/secondary-header";
import Card from "@/molecules/card";
import SideMenu from "@/molecules/side-menu";

const ProjectDetails = ({
  header,
  userDropdownClick,
  dropDownLabel,
  headingPath,
  title,
  subTitle,
  cardData,
  sideMenu,
}) => {
  return (
    <div>
      {sideMenu ? (
        <Header
          navLinks={header.navLinks}
          userDropdown={header.userDropdown}
          userDropdownClick={userDropdownClick}
          dropDownLabel={dropDownLabel}
        />
      ) : (
        <SecondaryHeader />
      )}
      <div className="flex">
        {sideMenu && (
          <div>
            <SideMenu menu={sideMenu} heading={cardData[0].rows[0].value} />
          </div>
        )}
        <div className="container mx-auto">
          <Heading
            headingPath={headingPath}
            title={title}
            subTitle={subTitle}
          />
          {cardData.map((data, i) => {
            return (
              <div className="mt-11" key={i}>
                <Card data={data} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ProjectDetails;
