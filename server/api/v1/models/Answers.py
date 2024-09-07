from sqlmodel import SQLModel, Field, Relationship
from sqlalchemy import Column, String, table, BOOLEAN
from api.v1.models.mixins import TimeMixin
from typing import Optional


class Answers(SQLModel, TimeMixin, table=True):
    __tablename__ = "answers"

    id: int = Field(primary_key=True, nullable=False)
    title: str = Field(sa_column=Column(
        "title", String, nullable=True, unique=True))
    is_Correct: bool = Field(sa_column=Column(
        "is_Correct", BOOLEAN, nullable=True, unique=False))
    thumbnail: str = Field(sa_column=Column(
        "thumbnail", String, nullable=True, unique=False))
    #
    questions_id: Optional[int] = Field(
        default=None, foreign_key="questions.id", nullable=False)
    questions: Optional["Questions"] = Relationship(back_populates="answers")
