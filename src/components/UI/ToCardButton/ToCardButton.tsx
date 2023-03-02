import { FC } from 'react';
import classNames from 'classnames';
import { Product } from '../../../types/Product';
import './ToCardButton.scss';
import { actions as cartActions } from '../../../features/cart';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { actions } from '../../../features/alert';

type Props = {
  width: string;
  height: string;
  product: Product;
};

export const ToCardButton: FC<Props> = ({ width, height, product }) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.cart);
  const { id: userId } = useAppSelector(state => state.user);

  const visibleCartItems = cart.filter(cartItem => cartItem.userId === userId);

  const isAdded = visibleCartItems
    .some(cartProduct => cartProduct.id === product.id);

  const styles = {
    width,
    height,
  };

  const addCartItem = () => {
    if (userId) {
      const cartItem = {
        id: product.id,
        quantity: 1,
        product,
        userId,
      };

      dispatch(cartActions.add(cartItem));
    } else {
      dispatch(actions.add({ unauthorized: true }));
      setTimeout(() => {
        dispatch(actions.remove());
      }, 3000);
    }
  };

  const removeCartItem = () => {
    if (userId) {
      const cartItem = {
        id: product.id,
        quantity: 1,
        product,
        userId,
      };

      dispatch(cartActions.remove(cartItem));
    }
  };

  return (
    <button
      type="button"
      className={classNames(
        'to-card-button',
        { 'to-card-button--added': isAdded },
      )}
      style={styles}
      onClick={isAdded ? removeCartItem : addCartItem}
    >
      {isAdded ? 'Added to cart' : 'Add to cart'}
    </button>
  );
};
