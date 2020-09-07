import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import MemberService from "../../services/MemberService";
import MemberAdd from "./MemberAdd";

export default function MemberAddContainer(props) {
  const history = useHistory();
  const [isSubmitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
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
    <MemberAdd
      {...props}
      isSubmitting={isSubmitting}
      submit={submit}
      submitError={submitError}
    />
  );
}
