import React, { useEffect, useState } from "react";
import BranchService from "../../services/BranchService";
import FellowshipService from "../../services/FellowshipService";
import MemberForm from "./MemberForm";

export default function MemberFormContainer(props) {
  const [loadingBranches, setLoadingBranches] = useState(false);
  const [loadingFellowships, setLoadingFellowships] = useState(false);
  const [fellowships, setFellowships] = useState([]);
  const [branches, setBranches] = useState([]);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    async function getFellowships() {
      setLoadingFellowships(true);
      const { body, status, error } = await FellowshipService.getFellowships();
      if (status) {
        setFellowships((f) => [f, ...body.content]);
      } else {
        setApiError(error);
      }
      setLoadingFellowships(false);
    }
    getFellowships();
  }, []);

  useEffect(() => {
    async function getBranches() {
      setLoadingBranches(true);
      const { body, status, error } = await BranchService.getBranches();
      if (status) {
        setBranches((b) => [b, ...body.content]);
      } else {
        setApiError(error);
      }
      setLoadingBranches(false);
    }
    getBranches();
  }, []);

  return (
    <MemberForm
      {...props}
      apiError={apiError}
      loadingFellowships={loadingFellowships}
      fellowships={fellowships}
      loadingBranches={loadingBranches}
      branches={branches}
    />
  );
}
