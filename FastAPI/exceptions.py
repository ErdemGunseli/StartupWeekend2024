from fastapi import HTTPException, status as st


class NoMessageException(HTTPException):
    def __init__(self, detail="Please type a message, record audio, or upload an image."):
        super().__init__(status_code=st.HTTP_422_UNPROCESSABLE_ENTITY, detail=detail)


class UnprocessableMessageException(HTTPException):
    def __init__(self, detail="Please ensure your message is in a valid format."):
        super().__init__(status_code=st.HTTP_400_BAD_REQUEST, detail=detail)
