import React, { useEffect } from 'react';
import { X } from '@phosphor-icons/react';
import { AnimatePresence, motion } from 'motion/react';
import { createPortal } from 'react-dom';
import './modal-drop.css';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.36 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const dropVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.22,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 420,
      damping: 32,
      mass: 0.72,
      opacity: { duration: 0.32, ease: [0.4, 0, 0.2, 1] },
    },
  },
  exit: {
    opacity: 0,
    y: 24,
    transition: {
      duration: 0.18,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const scaleVariants = {
  hidden: {
    opacity: 0,
    scale: 0.82,
    transition: {
      duration: 0.15,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 520,
      damping: 30,
      mass: 0.52,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.82,
    transition: {
      duration: 0.15,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const ModalDrop = ({
  isOpen,
  onClose,
  children,
  allowEasyClose = true,
  title,
  subtitle,
  type = 'blur',
  showCloseButton = true,
  showEscText = true,
  borderBottom = true,
  className = '',
  animationType = 'scale',
  position = 0,
  disablePadding = false,
}) => {
  const canUseDOM = typeof window !== 'undefined' && typeof document !== 'undefined';
  const MotionDiv = motion.div;

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleEsc = (event) => {
      if (event.key === 'Escape' && allowEasyClose) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, allowEasyClose, onClose]);

  useEffect(() => {
    if (!canUseDOM) return undefined;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (isOpen) {
      const currentPaddingRight = Number.parseInt(
        window.getComputedStyle(document.body).paddingRight,
        10
      ) || 0;
      document.body.style.paddingRight = `${currentPaddingRight + scrollbarWidth}px`;
      document.body.classList.add('modal-drop-lock');
    } else {
      document.body.style.paddingRight = '';
      document.body.classList.remove('modal-drop-lock');
    }

    return () => {
      document.body.style.paddingRight = '';
      document.body.classList.remove('modal-drop-lock');
    };
  }, [canUseDOM, isOpen]);

  if (!canUseDOM) return null;

  const panelVariants = animationType === 'drop' ? dropVariants : scaleVariants;
  const overlayClass =
    type === 'blur'
      ? 'modal-drop-backdrop--blur'
      : type === 'none'
        ? 'modal-drop-backdrop--none'
        : 'modal-drop-backdrop--overlay';

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <MotionDiv
          className={`modal-drop-backdrop ${overlayClass}`}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={() => {
            if (allowEasyClose) onClose();
          }}
          style={{
            alignItems: position === 0 ? 'center' : 'flex-start',
            paddingTop: position === 0 ? undefined : `calc(50vh - ${position}px)`,
          }}
        >
          <MotionDiv
            className={`modal-drop-panel ${className}`.trim()}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(event) => event.stopPropagation()}
          >
            {(title || showCloseButton) && (
              <div
                className={[
                  'modal-drop-header',
                  borderBottom ? 'modal-drop-header--border' : '',
                  subtitle ? 'modal-drop-header--stacked' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {title ? (
                  <div>
                    <h2 className="modal-drop-title">{title}</h2>
                    {subtitle && <p className="modal-drop-subtitle">{subtitle}</p>}
                  </div>
                ) : (
                  <div />
                )}

                {showCloseButton && (
                  <div className="modal-drop-close-wrap">
                    <button
                      type="button"
                      className="modal-drop-close-btn"
                      onClick={onClose}
                      aria-label="Close modal"
                    >
                      <X size={18} weight="bold" />
                    </button>
                  </div>
                )}
              </div>
            )}

            <div
              className={[
                'modal-drop-body',
                disablePadding ? 'modal-drop-body--no-padding' : '',
                !title ? 'modal-drop-body--top-gap' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {children}
            </div>
          </MotionDiv>
        </MotionDiv>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ModalDrop;
