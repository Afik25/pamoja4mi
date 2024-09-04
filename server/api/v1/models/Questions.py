from sqlmodel import SQLModel, Field, Relationship
from sqlalchemy import Column, String, table
from api.v1.models.mixins import TimeMixin
from typing import Optional


class Questions(SQLModel, DataMixin, TimeMixin, table=True):
    __tablename__ = "questions"

    id: int = Field(primary_key=True, nullable=False)
    title: str = Field(sa_column=Column(
        "title", String, nullable=True, unique=True))
    thumbnail: str = Field(sa_column=Column(
        "thumbnail", String, nullable=True, unique=False))
    #
    lessons_id: Optional[int] = Field(
        default=None, foreign_key="lessons.id", nullable=False)
    lessons: Optional["Lessons"] = Relationship(back_populates="questions")
    # 
    answers: Optional["Answers"] = Relationship(back_populates="questions")
    assessment_details: Optional["AssessmentDetails"] = Relationship(back_populates="questions")
