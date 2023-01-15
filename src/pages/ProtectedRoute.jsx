import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children, requireAdmin }) {
  // 로그인한 사용자가 있는지 확인
  const { user } = useAuthContext();

  // 그 사용자가 관리자 권한이 있는지 확인
  // requireAdmin이 true인 경우에는 로그인도 되어 있어야 하고, 관리자 권한도 가지고 있어야 함
  if (!user || (requireAdmin && !user.isAdmin)) {
    // 조건이 맞지 않으면 / 상위 경로로 이동
    // 조건이 맞는 경우에만 전달되 children을 보여줌
    return <Navigate to="/" replace />;
    // *replace: 지금 현재 경로를 history에 넣고 싶지 않을때(잘못 들어온 경우)
  }

  return children;
}
