from sqlmodel import SQLModel, Field, Relationship
from sqlalchemy import Column, String, table
from api.v1.models.mixins import TimeMixin
from typing import Optional, List

class Classes(SQLModel, TimeMixin, table=True):
    __tablename__ = "classes"

    id: int = Field(primary_key=True, nullable=False)
    title: str = Field(sa_column=Column("title", String, nullable=True, unique=True))
    description : str = Field(sa_column=Column("description", String, nullable=True, unique=False))
    # 
    school_id: Optional[int] = Field(
        default=None, foreign_key="schools.id", nullable=False)
    school: Optional["School"] = Relationship(back_populates="classes")
    #
    courses: List["Courses"] = Relationship(back_populates="classes")

