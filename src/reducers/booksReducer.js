export default function booksReducer(state = [], action) {
	switch (action.type) {
		case "ADD_BOOK":
			return [...state, action.book];

		case "REMOVE_BOOK":
			return [...state.filter((book) => book.id !== action.id)];

		default:
			return state;
	}
}
