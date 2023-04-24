import {
  alpha,
  displayFlex,
  keyframes,
  styled,
  textEllipsis,
} from '@affine/component';

export const StyledListItem = styled('div')<{
  active?: boolean;
  disabled?: boolean;
}>(({ active, disabled }) => {
  return {
    height: '32px',
    color: active
      ? 'var(--affine-primary-color)'
      : 'var(--affine-text-primary-color)',
    padding: '0 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    marginBottom: '4px',
    position: 'relative',
    flexShrink: 0,
    userSelect: 'none',
    ...displayFlex('flex-start', 'center'),
    ...(disabled
      ? {
          cursor: 'not-allowed',
          color: 'var(--affine-border-color)',
        }
      : {}),

    '> svg, a > svg': {
      fontSize: '20px',
      marginRight: '12px',
      color: active
        ? 'var(--affine-primary-color)'
        : 'var(--affine-icon-color)',
    },
    ':hover:not([disabled])': {
      backgroundColor: 'var(--affine-hover-color)',
    },
  };
});

export const StyledCollapseButton = styled('button')<{
  collapse: boolean;
  show?: boolean;
}>(({ collapse, show = true }) => {
  return {
    width: '16px',
    height: '100%',
    ...displayFlex('center', 'center'),
    fontSize: '16px',
    position: 'absolute',
    left: '0',
    top: '0',
    bottom: '0',
    margin: 'auto',
    color: 'var(--affine-icon-color)',
    opacity: '.6',
    transition: 'opacity .15s ease-in-out',
    display: show ? 'flex' : 'none',
    svg: {
      transform: `rotate(${collapse ? '0' : '-90'}deg)`,
    },
    ':hover': {
      opacity: '1',
    },
  };
});

export const StyledCollapseItem = styled('div')<{
  disable?: boolean;
  active?: boolean;
  isOver?: boolean;
  textWrap?: boolean;
}>(({ disable = false, active = false, isOver, textWrap = false }) => {
  return {
    width: '100%',
    lineHeight: '1.5',
    minHeight: '32px',
    borderRadius: '8px',
    ...displayFlex('flex-start', 'center'),
    paddingRight: '2px',
    position: 'relative',
    color: disable
      ? 'var(--affine-text-disable-color)'
      : active
      ? 'var(--affine-primary-color)'
      : 'var(--affine-text-primary-color)',
    cursor: disable ? 'not-allowed' : 'pointer',
    background: isOver ? alpha('var(--affine-primary-color)', 0.06) : '',
    userSelect: 'none',
    ...(textWrap
      ? {
          wordBreak: 'break-word',
          whiteSpace: 'pre-wrap',
        }
      : {}),
    span: {
      flexGrow: '1',
      textAlign: 'left',
      ...textEllipsis(1),
    },
    '> svg': {
      fontSize: '20px',
      marginRight: '8px',
      flexShrink: '0',
      color: active
        ? 'var(--affine-primary-color)'
        : 'var(--affine-icon-color)',
    },

    ':hover': disable
      ? {}
      : {
          backgroundColor: 'var(--affine-hover-color)',
          '.operation-button': {
            visibility: 'visible',
          },
        },
  };
});

const slideIn = keyframes({
  '0%': {
    height: '0px',
  },
  '50%': {
    height: '36px',
  },
  '100%': {
    height: '32px',
  },
});
const slideIn2 = keyframes({
  '0%': {
    transform: 'translateX(100%)',
  },
  '50%': {
    transform: 'translateX(100%)',
  },
  '80%': {
    transform: 'translateX(-10%)',
  },
  '100%': {
    transform: 'translateX(0%)',
  },
});

const slideOut = keyframes({
  '0%': {
    height: '32px',
  },
  '60%': {
    height: '32px',
  },
  '80%': {
    height: '32px',
  },
  '100%': {
    height: '0px',
  },
});
const slideOut2 = keyframes({
  '0%': {
    transform: 'translateX(0%)',
  },
  '100%': {
    transform: 'translateX(100%)',
  },
});

export const StyledChangeLog = styled('div')<{
  isClose?: boolean;
}>(({ isClose }) => {
  return {
    width: '110%',
    height: '32px',
    ...displayFlex('flex-start', 'center'),
    color: 'var(--affine-primary-color)',
    backgroundColor: 'var(--affine-hover-color)',
    border: '1px solid var(--affine-primary-color)',
    borderRight: 'none',
    marginLeft: '8px',
    paddingLeft: '8px',
    borderRadius: '16px 0 0 16px',
    cursor: 'pointer',
    zIndex: 1001,
    position: 'absolute',
    userSelect: 'none',
    transition: 'all 0.3s',
    animation: isClose
      ? `${slideOut2} .3s ease-in-out forwards`
      : `${slideIn2} 1s ease-in-out forwards`,
    '> svg, a > svg': {
      fontSize: '20px',
      marginRight: '12px',
      color: 'var(--affine-primary-color)',
    },
    button: {
      marginRight: '12%',
    },
  };
});
export const StyledChangeLogWrapper = styled('div')<{
  isClose?: boolean;
}>(({ isClose }) => {
  return {
    width: 'calc(100% + 4px)',
    height: '0px',
    animation: isClose
      ? `${slideOut} .3s ease-in-out forwards`
      : `${slideIn} 1s ease-in-out forwards`,
    ...displayFlex('flex-start', 'center'),
    marginBottom: '4px',
    position: 'relative',
    userSelect: 'none',
    transition: 'all 0.3s',
    overflow: 'hidden',
  };
});

export const StyledRouteNavigationWrapper = styled('div')({
  height: '32px',
  width: '80px',
  marginRight: '16px',
  ...displayFlex('space-between', 'center'),
});
