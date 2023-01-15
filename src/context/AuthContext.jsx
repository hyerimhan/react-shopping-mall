import { createContext, useContext, useEffect, useState } from "react";
import { login, logout, onUserStateChange } from "../api/firebase";

const AuthContext = createContext();

// 데이터에 접근하기위한 가장 상위 요소(App.js)에 우산을 씌워주기 위한 함수
export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();

  // 로그인 상태인지 아닌지 확인
  useEffect(() => {
    // 인자가 동일하면 참조 값(setUser)만 전달해줘도 된다.
    // onUserStateChange(setUser);
    onUserStateChange((user) => {
      setUser(user);
      console.log(user);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, uid: user && user.uid, login: login, logout: logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// 위에 설정한 context를 사용하기위한 행동함수
export function useAuthContext() {
  return useContext(AuthContext);
}
