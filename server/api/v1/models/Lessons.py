from sqlmodel import SQLModel, Field, Relationship
from sqlalchemy import Column, String, table
from api.v1.models.mixins import TimeMixin
from typing import Optional, List


class Lessons(SQLModel, TimeMixin, table=True):
    __tablename__ = "lessons"

    id: int = Field(primary_key=True, nullable=False)
    title: str = Field(sa_column=Column(
        "title", String, nullable=True, unique=True))
    description: str = Field(sa_column=Column(
        "description", String, nullable=True, unique=False))  # content_text
    thumbnail: str = Field(sa_column=Column(
        "thumbnail", String, nullable=True, unique=False))
    #
    courses_id: Optional[int] = Field(
        default=None, foreign_key="courses.id", nullable=False)
    courses: Optional["Courses"] = Relationship(back_populates="lessons")
    # 
    questions: List["Questions"] = Relationship(back_populates="lessons")
