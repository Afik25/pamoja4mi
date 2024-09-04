from sqlmodel import SQLModel, Field, Relationship
from sqlalchemy import Column, String, table
from api.v1.models.mixins import TimeMixin
from typing import Optional, List


class Courses(SQLModel, DataMixin, TimeMixin, table=True):
    __tablename__ = "courses"

    id: int = Field(primary_key=True, nullable=False)
    title: str = Field(sa_column=Column(
        "title", String, nullable=True, unique=True))
    description: str = Field(sa_column=Column(
        "description", String, nullable=True, unique=False))
    #
    classes_id: Optional[int] = Field(
        default=None, foreign_key="classes.id", nullable=False)
    classes: Optional["Classes"] = Relationship(back_populates="courses")
    #
    lessons: List["Lessons"] = Relationship(back_populates="courses")
