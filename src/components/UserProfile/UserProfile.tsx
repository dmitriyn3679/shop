import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import profileImg from '../../img/profile.jpeg';
import './UserProfile.scss';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { actions as userActions } from '../../features/user';

export const UserProfile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user);

  const logout = async () => {
    await signOut(auth);
    dispatch(userActions.removeUser());
    navigate('/');
  };

  return (
    <div className="profile">
      <img src={profileImg} alt="user" className="profile__img" />
      <div className="profile__info">
        <div className="profile__info-field">
          <span className="profile__label">ID: </span>
          <div className="profile__id profile__data">{user.id}</div>
        </div>
        <div className="profile__info-field">
          <span className="profile__label">Email: </span>
          <div className="profile__email profile__data">{user.email}</div>
        </div>
        {user?.name && (
          <div className="profile__info-field">
            <span className="profile__label">Name: </span>
            <div className="profile__name profile__data">{user.name}</div>
          </div>
        )}
        <Button
          variant="contained"
          color="error"
          onClick={logout}
          sx={{ height: '60px', backgroundColor: '#F53838' }}
        >
          logout
        </Button>
      </div>
    </div>
  );
};
