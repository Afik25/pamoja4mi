from sqlmodel import SQLModel, Field, Relationship
from sqlalchemy import Column, String, table
from api.v1.models.mixins import TimeMixin
from typing import Optional
from datetime import datetime


class AssessmentDetails(SQLModel, TimeMixin, table=True):
    __tablename__ = "assessment_details"

    id: int = Field(primary_key=True, nullable=False)
    dates: datetime = Field(sa_column=Column(
        "dates", String, nullable=True, unique=True))
    answer: str = Field(sa_column=Column(
        "answer", String, nullable=True, unique=False))
    #
    assessment_id: Optional[int] = Field(
        default=None, foreign_key="assessments.id", nullable=False)
    assessment: Optional["Assessment"] = Relationship(back_populates="assessment_details")
    #
    questions_id: Optional[int] = Field(
        default=None, foreign_key="questions.id", nullable=False)
    questions: Optional["Questions"] = Relationship(back_populates="assessment_details")
