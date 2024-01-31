export const dictionary = {
  AUTH: {
    SIGN_IN_WITH_GITHUB: 'Sign In with Github',
    SESSION_EXPIRED_ALERT_TITLE: 'Session Expired',
    SESSION_EXPIRED_ALERT_DESCRIPTION:
      'Your session has expired, please sign in again.'
  },
  COMMON: {
    APP_NAME: 'Coding For Fun',
    ALERT_DEFAULT_SUCCESS_TITLE: 'Success',
    ALERT_DEFAULT_ERROR_TITLE: 'Error',
    TOAST_DEFAULT_SUCCESS_TITLE: 'Success',
    TOAST_DEFAULT_ERROR_TITLE: 'Error',
    TOAST_DEFAULT_ERROR_DESCRIPTION:
      'Something went wrong. Please try again later.',
    ALERT_DIALOG_DEFAULT_CANCEL_BUTTON: 'Cancel',
    ALERT_DIALOG_DEFAULT_CONTINUE_BUTTON: 'Continue',
    ALERT_DIALOG_DEFAULT_SUBMIT_BUTTON: 'Submit',
    ALERT_DIALOG_DEFAULT_CONFIRM_BUTTON: 'Confirm'
  },
  GITHUB: {
    NEW_CONNECTION_BUTTON: 'New Connection',
    CONNECTION_DELETE_CONNECTION_TITLE: 'Delete Connection',
    PULL_REVIEW_FORM_COMMENT_BUTTON: 'Comment',
    PULL_REVIEW_FORM_APPROVE_BUTTON: 'Approve',
    PULL_REVIEW_FORM_REQUEST_CHANGES_BUTTON: 'Request Changes',
    PULL_REVIEW_FORM_COMMENT_PLACEHOLDER: 'Leave a comment',
    TOAST_ADD_CONNECTION_SUCCESS_DESCRIPTION: 'Add connection successfully.',
    TOAST_DELETE_CONNECTION_SUCCESS_DESCRIPTION:
      'Delete connection successfully.',
    PULL_REVIEW_FORM_SUBMIT_DESCRIPTION_REPO: '- Repository Name: {{repoName}}',
    PULL_REVIEW_FORM_SUBMIT_DESCRIPTION_PULL:
      '- Pull Request Title: {{pullTitle}}',
    CONNECTION_DELETE_CONNECTION_DESCRIPTION_1:
      'Are you sure you want to delete this {{installationOwner}} connection?',
    CONNECTION_DELETE_CONNECTION_DESCRIPTION_2: 'You can not undo this action.',
    TAB_BULK_PULL_REVIEWS_LABEL: 'Bulk Pull Request Reviews',
    TAB_CONNECTIONS_LABEL: 'Connections'
  },
  HEADER: {
    LINK_GITHUB_TOOLTIP: 'View source code on GitHub',
    TOGGLE_THEME_TOOLTIP: 'Toggle theme'
  },
  ROOT_PAGE: {
    APP_DESCRIPTION: 'This is my personal playground for coding and learning.',
    PLAYGROUND_LIST_TITLE: 'Playground',
    PLAYGROUND_LIST_ITEM_GITHUB_BULK_PULL_REVIEW:
      'GitHub Bulk Pull Request Reviewer'
  }
} as const
