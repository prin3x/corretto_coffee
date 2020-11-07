export const ReviewReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_REVIEW':
      return [
        {
          id: action.id,
          comment: action.comment,
          rating: action.rating,
        },
        ...state,
      ];

    case 'RETRIEVE_ALL_REVIEWS':
      return [...state];

    default:
      return state;
  }
};
