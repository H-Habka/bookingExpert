import AccountPageHeader from "./AccountPageHeader";
import BookList from "./BookList";
import Details from "./Details";
import FollowUsOnSocialMedia from "./FollowUsOnSocialMedia";
import OurSpecialists from "./OurSpecialists";
import RateYourExperince from "./RateYourExperince";

const IndividualAccountPage = () => {
  return (
    <div>
      <AccountPageHeader />
      {/* <div className=" border">
        <BookList isModal={false}/>
      </div> */}
      <div className="p-10">
        {/* <FollowUsOnSocialMedia /> */}
        {/* <OurSpecialists /> */}
        {/* <Details /> */}
        <RateYourExperince />
      </div>
    </div>
  );
};

export default IndividualAccountPage;
