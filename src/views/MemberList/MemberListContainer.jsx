import React, { useCallback, useEffect, useState } from "react";
import MemberService from "../../services/MemberService";
import MemberList from "./MemberList";

export default function MemberListContainer() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const [size, setSize] = useState(10);
  const [page, setPage] = useState(0);
  const [members, setMembers] = useState([
    /**
     * Arr Structure
     * {
     *   id: null,
     *   firstName: "",
     *   lastName: "",
     *   phoneNumber: "",
     *   email: "",
     *   fellowship: { fellowshipName: "" },
     *   branch: { name: "" },
     *  },
     */
  ]);

  const getMembers = useCallback(async () => {
    setError(null);
    setLoading(true);
    try {
      const {
        response: { content, paged },
      } = await MemberService.getMembers({ page, size });
      setMembers(content);
      setTotalCount(paged.totalCount);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }, [page, size]);

  useEffect(() => {
    getMembers();
  }, [getMembers, size, page]);

  return (
    <MemberList
      size={size}
      setSize={setSize}
      page={page}
      setPage={setPage}
      error={error}
      loading={loading}
      members={members}
      totalCount={totalCount}
    />
  );
}
