import Header from "@/organisms/header";
const Dashboard = ({ header, dropDownLabel }) => {
  return (
    <div>
      <Header
        navLinks={header.navLinks}
        userDropdown={header.userDropdown}
        dropDownLabel={dropDownLabel}
      />
    </div>
  );
};
export default Dashboard;
