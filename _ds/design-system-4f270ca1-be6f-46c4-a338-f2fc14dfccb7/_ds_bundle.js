/* @ds-bundle: {"format":4,"namespace":"DesignSystem_4f270c","components":[{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/display/Badge.jsx":"5fc04e8db89b","components/display/Card.jsx":"7250f82f6e57","components/forms/Button.jsx":"b306719f8764","components/forms/Input.jsx":"15b2d56c0e39"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_4f270c = window.DesignSystem_4f270c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/display/Badge.jsx
try { (() => {
const tones = {
  primary: {
    bg: 'var(--primary-50)',
    text: 'var(--primary-700)'
  },
  green: {
    bg: 'var(--secondary-green-tint)',
    text: 'var(--secondary-green-text)'
  },
  pink: {
    bg: 'var(--secondary-pink-tint)',
    text: 'var(--secondary-pink-text)'
  },
  neutral: {
    bg: 'var(--neutral-100)',
    text: 'var(--neutral-700)'
  }
};
function Badge({
  tone = 'primary',
  children
}) {
  const t = tones[tone] || tones.primary;
  return React.createElement('span', {
    style: {
      display: 'inline-block',
      background: t.bg,
      color: t.text,
      fontFamily: 'var(--font-family-base)',
      fontSize: '11px',
      fontWeight: 500,
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)'
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function Card({
  featured = false,
  children
}) {
  const [hover, setHover] = React.useState(false);
  const style = {
    background: featured ? 'var(--primary-50)' : '#fff',
    border: `1px solid ${featured ? 'var(--primary-300)' : hover ? 'var(--neutral-300)' : 'var(--neutral-100)'}`,
    borderRadius: 'var(--radius-card)',
    padding: '20px',
    fontFamily: 'var(--font-family-base)',
    transition: 'border-color .15s ease'
  };
  return React.createElement('div', {
    style,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick
}) {
  const pad = size === 'sm' ? '8px 16px' : '10px 20px';
  const fontSize = size === 'sm' ? '14px' : '16px';
  const base = {
    fontFamily: 'var(--font-family-base)',
    fontWeight: 600,
    fontSize,
    padding: pad,
    borderRadius: 'var(--radius-control)',
    cursor: disabled ? 'default' : 'pointer',
    border: 'none',
    transition: 'background .15s ease, color .15s ease, border-color .15s ease'
  };
  const variants = {
    primary: {
      background: disabled ? 'var(--primary-100)' : 'var(--primary-500)',
      color: disabled ? 'var(--primary-300)' : '#fff'
    },
    secondary: {
      background: 'transparent',
      border: `1px solid ${disabled ? 'var(--neutral-300)' : 'var(--primary-500)'}`,
      color: disabled ? 'var(--neutral-500)' : 'var(--primary-500)'
    },
    ghost: {
      background: 'transparent',
      color: disabled ? 'var(--neutral-300)' : 'var(--neutral-700)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverBg = {
    primary: 'var(--primary-700)',
    secondary: 'var(--primary-50)',
    ghost: 'var(--neutral-100)'
  };
  const style = {
    ...base,
    ...variants[variant]
  };
  if (hover && !disabled) {
    style.background = hoverBg[variant];
    if (variant === 'primary') style.color = '#fff';
  }
  return React.createElement('button', {
    style,
    disabled,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  error,
  helperText,
  value,
  onChange
}) {
  const [focused, setFocused] = React.useState(false);
  const borderColor = error ? 'var(--semantic-error)' : focused ? 'var(--primary-500)' : 'var(--neutral-300)';
  const boxShadow = focused && !error ? '0 0 0 3px var(--primary-50)' : 'none';
  return React.createElement('div', {
    style: {
      fontFamily: 'var(--font-family-base)',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      width: '100%'
    }
  }, label && React.createElement('label', {
    style: {
      fontSize: '13px',
      fontWeight: 500,
      color: 'var(--neutral-700)'
    }
  }, label), React.createElement('input', {
    style: {
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-control)',
      padding: '10px 12px',
      fontSize: '16px',
      fontFamily: 'var(--font-family-base)',
      color: 'var(--neutral-900)',
      background: '#fff',
      boxShadow,
      outline: 'none',
      transition: 'border-color .15s ease, box-shadow .15s ease'
    },
    placeholder,
    value,
    onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }), helperText && React.createElement('span', {
    style: {
      fontSize: '12px',
      color: error ? 'var(--semantic-error)' : 'var(--neutral-500)'
    }
  }, helperText));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

})();
