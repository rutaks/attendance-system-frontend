import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import LoadingContainerBar from "../../components/LoadingContainerBar";
import MemberService from "../../services/MemberService";
import MemberEdit from "./MemberEdit";

export default function MemberEditContainer({ memberId, ...props }) {
  const history = useHistory();
  const [isGettingItem, setGettingItem] = useState(true);
  const [member, setMember] = useState(null);
  const [itemError, setItemError] = useState(null);
  const [isSubmitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    async function getMemberDetails() {
      try {
        const { response } = await MemberService.getMemberById(memberId);
        setGettingItem(false);
        setMember(response.member);
      } catch (error) {
        console.log(error);
        setGettingItem(false);
        setItemError("error");
      }
    }

    getMemberDetails();
  }, [memberId]);

  const submit = async (member) => {
    if (member.phoneNumber) {
      member.phoneNumber = member.phoneNumber.toString();
    }
    if (member.email === "") {
      delete member.email;
    }
    if (member.phoneNumber === "") {
      delete member.phoneNumber;
    }
    setSubmitting(true);
    setSubmitError(null);
    const { status, error } = await MemberService.createMember(member);
    if (status) {
      history.goBack();
    } else {
      setSubmitError(error);
    }
    setSubmitting(false);
  };

  return (
    <Fragment>
      <LoadingContainerBar loading={isGettingItem} />
      <MemberEdit
        {...props}
        editItem={member}
        isSubmitting={isSubmitting}
        isGettingItem={isGettingItem}
        submit={submit}
        submitError={submitError}
        itemError={itemError}
      />
    </Fragment>
  );
}
