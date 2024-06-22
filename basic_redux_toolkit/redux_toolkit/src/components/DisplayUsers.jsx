import { useSelector } from "react-redux";
import styled from "styled-components";
import { MdDeleteForever } from "react-icons/md";

function DisplayUsers() {
    const data = useSelector((state) => {
        return state.users
    });
    console.log(data)
    return (
        <Wrapper>
            {
                data.map((user, id) => {
                    return <li key={id}>
                        {user}
                        <button className="delete-btn">
                            <MdDeleteForever className="delete-icon" />

                        </button>
                    </li>
                })
            }
        </Wrapper>
    )
}
const Wrapper = styled.section`
  li{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem
    border-bottom: 1px solid #eee;
    &:first-child{
        border-top: 1px solid #eee
    }
    margin: 1.6rem 5rem;
  }
  .delete-btn {
    background-color: transparent;
    border: none;
  }
  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
`;


export default DisplayUsers
