from sqlmodel import SQLModel, Field, Relationship
from sqlalchemy import Column, String, table
from api.v1.models.mixins import TimeMixin
from typing import Optional
from datetime import datetime


class LearningHistoric(SQLModel, DataMixin, TimeMixin, table=True):
    __tablename__ = "learning_historic"

    id: int = Field(primary_key=True, nullable=False)
    started_dates: datetime = Field(sa_column=Column(
        "started_dates", String, nullable=True, unique=True))
    end_dates: datetime = Field(sa_column=Column(
        "end_dates", String, nullable=True, unique=True))
    type: str = Field(sa_column=Column(
        "type", String, nullable=True, unique=False))  # text/video
    #
    lessons_id: Optional[int] = Field(
        default=None, foreign_key="lessons.id", nullable=False)
    lessons: Optional["Lessons"] = Relationship(back_populates="questions")
    #
    user_id: Optional[int] = Field(
        default=None, foreign_key="users.id", nullable=False)
    user: Optional["User"] = Relationship(back_populates="learning_historic")
