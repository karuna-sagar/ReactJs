import { useDispatch } from "react-redux"
import { deleteAllUser } from "../store/slice/UserSlice";
import styled from "styled-components";

function DeleteUser() {
    const dispatch = useDispatch();
    const removeAllUser = () => {
        dispatch(deleteAllUser());
    }
    return (
        <Wrapper>
            <button className="btn clear-btn" onClick={removeAllUser}>Clear User</button>
        </Wrapper>
    )
}
const Wrapper = styled.section`
  .clear-btn{
    text-transform: capitalize;
    background-color : #db338a;
    margin-top : 2rem;
  }
`;


export default DeleteUser
