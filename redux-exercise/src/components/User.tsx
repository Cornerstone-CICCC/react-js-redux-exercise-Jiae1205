import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../app/store";
import { incrementAge, setFirstname, setLastname } from "../features/user/UserSlice";

export default function User() {
  const dispatch = useDispatch<AppDispatch>();

  const { firstname, lastname, age } = useSelector((state: RootState) => state.user);

  return (
    <div style={{ padding: 16 }}>
      <h2>User</h2>

      <p>
        <b>Firstname:</b> {firstname}
      </p>
      <p>
        <b>Lastname:</b> {lastname}
      </p>
      <p>
        <b>Age:</b> {age}
      </p>

      <button onClick={() => dispatch(incrementAge())}>Increment Age</button>

      <div style={{ marginTop: 16, display: "grid", gap: 8, maxWidth: 240 }}>
        <input
          value={firstname}
          placeholder="firstname"
          onChange={(e) => dispatch(setFirstname(e.target.value))}
        />
        <input
          value={lastname}
          placeholder="lastname"
          onChange={(e) => dispatch(setLastname(e.target.value))}
        />
      </div>
    </div>
  );
}
