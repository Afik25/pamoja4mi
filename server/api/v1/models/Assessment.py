from sqlmodel import SQLModel, Field, Relationship
from sqlalchemy import Column, String, table
from api.v1.models.mixins import TimeMixin
from typing import Optional
from datetime import datetime


class Assessment(SQLModel, TimeMixin, table=True):
    __tablename__ = "assessments"

    id: int = Field(primary_key=True, nullable=False)
    dates: datetime = Field(sa_column=Column(
        "dates", String, nullable=True, unique=True))
    type: str = Field(sa_column=Column(
        "type", String, nullable=True, unique=False))
    #
    user_id: Optional[int] = Field(
        default=None, foreign_key="users.id", nullable=False)
    user: Optional["User"] = Relationship(back_populates="assessment")
    #
    assessment_details: Optional["AssessmentDetails"] = Relationship(back_populates="assessment")
