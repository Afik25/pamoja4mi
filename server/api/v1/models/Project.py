from sqlmodel import SQLModel, Field, Relationship
from sqlalchemy import Column, String, INTEGER, BOOLEAN, table
from api.v1.models.mixins import TimeMixin
from typing import List, Optional
from datetime import datetime

class Project(SQLModel, TimeMixin, table=True):
    __tablename__ = "projects"

    id: int = Field(primary_key=True, nullable=False, unique=True)
    type: str = Field(sa_column=Column("type", String, unique=False)) # individual/team
    description: str = Field(sa_column=Column("description", String, unique=False))
    thumbnail: str = Field(sa_column=Column("thumbnail", String, unique=False))
    deadline: datetime = Field(sa_column=Column("deadline", String, unique=False))

    project_assigned: List['ProjectAssigned'] = Relationship(back_populates="project")

    
